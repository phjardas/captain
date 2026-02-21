import { exec } from "child_process";
import firebase from "firebase-admin";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { resolve } from "path";
import { convertGameData } from "./convert.js";
import type { Data } from "./types.js";

const images = await processImages();
const data = JSON.parse(await readFile("data.json", "utf-8")) as Data;
const gameData = convertGameData(data, images);
await writeFile("game-data.json", JSON.stringify(gameData, null, 2), "utf-8");

firebase.initializeApp({
  credential: firebase.credential.cert(
    JSON.parse(await readFile("firebase-service-account.json", "utf-8")),
  ),
});

const firestore = firebase.firestore();

const writer = firestore.bulkWriter();

Object.values(gameData.products).forEach(({ id, ...product }) =>
  writer.set(firestore.collection("products").doc(id), product),
);

Object.values(gameData.machines).forEach(({ id, ...machine }) =>
  writer.set(firestore.collection("machines").doc(id), machine),
);

Object.values(gameData.recipes).forEach(({ id, ...recipe }) =>
  writer.set(firestore.collection("recipes").doc(id), recipe),
);

await writer.close();

async function processImages(): Promise<Record<string, string>> {
  const images = JSON.parse(await readFile("images.json", "utf-8")) as Record<
    string,
    [number, number]
  >;

  const entries = await Promise.all(
    Object.entries(images).map(
      async ([name, [x, y]]) => [name, await extractImage(name, x, y)] as const,
    ),
  );

  return Object.fromEntries(entries);
}

async function extractImage(
  name: string,
  x: number,
  y: number,
): Promise<string> {
  const filename = `tmp/${name}.png`;

  await mkdir(resolve(filename, ".."), { recursive: true });

  const command = [
    "convert",
    "images.png",
    "-crop",
    `32x32+${x * 32}+${y * 32}`,
    filename,
  ].join(" ");

  await new Promise<void>((resolve, reject) =>
    exec(command, (err) => (err ? reject(err) : resolve())),
  );

  const buffer = await readFile(filename);
  return `data:image/png;base64,${buffer.toString("base64")}`;
}
