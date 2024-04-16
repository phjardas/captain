import { gameData } from "./data.js";
import type { Machine, Product, Recipe } from "./types.js";

export function getRecipe(id: string): Recipe {
  const recipe = gameData.recipes[id];
  if (!recipe) throw new Error(`Recipe not found: ${id}`);
  return recipe;
}

export function getMachine(id: string): Machine {
  const machine = gameData.machines[id];
  if (!machine) throw new Error(`Machine not found: ${id}`);
  return machine;
}

export function getProduct(id: string): Product {
  const product = gameData.products[id];
  if (!product) throw new Error(`Product not found: ${id}`);
  return product;
}
