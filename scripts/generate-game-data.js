import { readFile, writeFile } from "node:fs/promises";
import { format } from "prettier";
const data = await generateGameData();
const content = `
import type { GameData } from "./types.js";

export const gameData: GameData = ${JSON.stringify(data, null, 2)};
`.trim();
const filename = "src/game/data.ts";
const formatted = await format(content, { filepath: filename });
await writeFile(filename, formatted, "utf-8");
async function generateGameData() {
    const [categories, machines, products, recipes] = await Promise.all([
        loadCategories(),
        loadMachines(),
        loadProducts(),
        loadRecipes(),
    ]);
    return { categories, machines, products, recipes };
}
async function loadCategories() {
    const categories = await loadData("categories");
    return Object.fromEntries(Object.values(categories).map(({ id, name, machines, recipes }) => [
        id,
        { id, name, machines, recipes },
    ]));
}
async function loadMachines() {
    const machines = await loadData("machines");
    return Object.fromEntries(Object.values(machines).map((machine) => [machine.id, toMachine(machine)]));
}
function toMachine({ id, icon, name, category_id, workers, electricity_consumed, electricity_generated, computing_consumed, computing_generated, build_costs, recipes, products, ...machine }) {
    return {
        id,
        icon,
        name,
        workers,
        category: category_id,
        maintenance: toMaintenance(machine),
        electricityProduction: electricity_generated - electricity_consumed,
        computingProduction: computing_generated - computing_consumed,
        buildCosts: toBuildCosts(build_costs),
        recipes,
        products,
    };
}
async function loadProducts() {
    const products = await loadData("products");
    return Object.fromEntries(Object.values(products).map(({ id, icon, name, machines, recipes }) => [
        id,
        { id, icon, name, machines, recipes },
    ]));
}
async function loadRecipes() {
    const recipes = await loadData("recipes");
    return Object.fromEntries(Object.values(recipes).map((recipe) => [recipe.id, toRecipe(recipe)]));
}
function toRecipe({ id, name, machine, duration, inputs, outputs, }) {
    return {
        id,
        name,
        machine,
        duration,
        inputs: inputs.map(({ id, quantity }) => ({ product: id, quantity })),
        outputs: outputs.map(({ id, quantity }) => ({ product: id, quantity })),
    };
}
async function loadData(filename) {
    return JSON.parse(await readFile(`data/calculator/data/${filename}.json`, "utf-8"));
}
function toMaintenance({ maintenance_cost_quantity, maintenance_cost_units, }) {
    return maintenance_cost_units !== null
        ? {
            type: toMaintenanceType(maintenance_cost_units),
            quantity: maintenance_cost_quantity,
        }
        : undefined;
}
function toMaintenanceType(unit) {
    switch (unit) {
        case "maintenance_i":
            return "1";
        case "maintenance_ii":
            return "2";
        case "maintenance_iii":
            return "3";
        default:
            throw new Error(`Unknown maintenance unit: ${unit}`);
    }
}
function toBuildCosts(costs) {
    return costs.map(({ id, quantity }) => ({ product: id, quantity }));
}
