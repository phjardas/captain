import { readFile, writeFile } from "node:fs/promises";
import { format } from "prettier";
import type {
  Category,
  GameData,
  Machine,
  Maintenance,
  Product,
  ProductQuantity,
  Recipe,
} from "../src/game/types.js";

const data = await generateGameData();

const content = `
import type { GameData } from "./types.js";

export const gameData: GameData = ${JSON.stringify(data, null, 2)};
`.trim();

const filename = "src/game/data.ts";
const formatted = await format(content, { filepath: filename });

await writeFile(filename, formatted, "utf-8");

async function generateGameData(): Promise<GameData> {
  const [categories, machines, products, recipes] = await Promise.all([
    loadCategories(),
    loadMachines(),
    loadProducts(),
    loadRecipes(),
  ]);

  return { categories, machines, products, recipes };
}

type CategoriesRawData = Record<
  string,
  {
    id: string;
    name: string;
    machines: string[];
    recipes: string[];
  }
>;

async function loadCategories(): Promise<Record<string, Category>> {
  const categories: CategoriesRawData = await loadData("categories");

  return Object.fromEntries(
    Object.values(categories).map(({ id, name, machines, recipes }) => [
      id,
      { id, name, machines, recipes },
    ])
  );
}

type MachinesRawData = Record<
  string,
  {
    id: string;
    icon: string;
    name: string;
    category_id: string;
    workers: number;
    maintenance_cost_units:
      | "maintenance_i"
      | "maintenance_ii"
      | "maintenance_iii";
    maintenance_cost_quantity: number;
    electricity_consumed: number;
    electricity_generated: number;
    computing_consumed: number;
    computing_generated: number;
    build_costs: Array<{ id: string; quantity: number }>;
    recipes: string[];
    products: { input: string[]; output: string[] };
  }
>;

async function loadMachines(): Promise<Record<string, Machine>> {
  const machines: MachinesRawData = await loadData("machines");

  return Object.fromEntries(
    Object.values(machines).map((machine) => [machine.id, toMachine(machine)])
  );
}

function toMachine({
  id,
  icon,
  name,
  category_id,
  workers,
  electricity_consumed,
  electricity_generated,
  computing_consumed,
  computing_generated,
  build_costs,
  recipes,
  products,
  ...machine
}: MachinesRawData[string]): Machine {
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

type ProductsRawData = Record<
  string,
  {
    id: string;
    icon: string;
    name: string;
    recipes: { input: string[]; output: string[] };
    machines: { input: string[]; output: string[] };
  }
>;

async function loadProducts(): Promise<Record<string, Product>> {
  const products: ProductsRawData = await loadData("products");

  return Object.fromEntries(
    Object.values(products).map(({ id, icon, name, machines, recipes }) => [
      id,
      { id, icon, name, machines, recipes },
    ])
  );
}

type RecipesRawData = Record<
  string,
  {
    id: string;
    name: string;
    machine: string;
    duration: number;
    inputs: Array<{ id: string; quantity: number }>;
    outputs: Array<{ id: string; quantity: number }>;
  }
>;

async function loadRecipes(): Promise<Record<string, Recipe>> {
  const recipes: RecipesRawData = await loadData("recipes");

  return Object.fromEntries(
    Object.values(recipes).map((recipe) => [recipe.id, toRecipe(recipe)])
  );
}

function toRecipe({
  id,
  name,
  machine,
  duration,
  inputs,
  outputs,
}: RecipesRawData[string]): Recipe {
  return {
    id,
    name,
    machine,
    duration,
    inputs: inputs.map(({ id, quantity }) => ({ product: id, quantity })),
    outputs: outputs.map(({ id, quantity }) => ({ product: id, quantity })),
  };
}

async function loadData<T>(filename: string): Promise<T> {
  return JSON.parse(
    await readFile(`data/calculator/data/${filename}.json`, "utf-8")
  );
}

type MaintenanceRawData = {
  maintenance_cost_units:
    | "maintenance_i"
    | "maintenance_ii"
    | "maintenance_iii"
    | null;
  maintenance_cost_quantity: number;
};

function toMaintenance({
  maintenance_cost_quantity,
  maintenance_cost_units,
}: MaintenanceRawData): Maintenance | undefined {
  return maintenance_cost_units !== null
    ? {
        type: toMaintenanceType(maintenance_cost_units),
        quantity: maintenance_cost_quantity,
      }
    : undefined;
}

function toMaintenanceType(unit: MaintenanceRawData["maintenance_cost_units"]) {
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

function toBuildCosts(
  costs: Array<{ id: string; quantity: number }>
): ReadonlyArray<ProductQuantity> {
  return costs.map(({ id, quantity }) => ({ product: id, quantity }));
}
