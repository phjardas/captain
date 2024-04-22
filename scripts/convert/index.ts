import { exec } from "child_process";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { format } from "prettier";
import { convertGameData } from "./convert.js";
import type { Data } from "./types.js";

const commands = process.argv.slice(2);
if (!commands.length) commands.push("data", "images");

for (const command of commands) {
  switch (command) {
    case "data":
      await processData();
      break;
    case "images":
      await processImages();
      break;
    default:
      throw new Error(`Invalid command: ${command}`);
  }
}

async function processData() {
  const data = JSON.parse(await readFile("data.json", "utf-8")) as Data;
  const gameData = convertGameData(data);

  const source = `import type { GameData } from "./types.js";\n\nexport const gameData: GameData = ${JSON.stringify(gameData)};\n`;

  const filename = "src/game/data.ts";
  const content = await format(source, { filepath: filename });
  await writeFile(filename, content, "utf-8");
}

async function processImages() {
  const images = JSON.parse(await readFile("images.json", "utf-8")) as Record<
    string,
    [number, number]
  >;

  await mkdir("public/assets", { recursive: true });
  await Promise.all(
    Object.entries(images).map(async ([name, [x, y]]) =>
      extractImage(name, x, y)
    )
  );
}

async function extractImage(name: string, x: number, y: number) {
  const command = [
    "convert",
    "images.png",
    "-crop",
    `32x32+${x * 32}+${y * 32}`,
    `public/assets/${name}.png`,
  ].join(" ");

  await new Promise<void>((resolve, reject) =>
    exec(command, (err) => (err ? reject(err) : resolve()))
  );
}
