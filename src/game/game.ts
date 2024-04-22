import type {
  GameData,
  Identifiable,
  Machine,
  Product,
  Recipe,
} from "./types.js";

function getRequired<T extends Identifiable>(
  key: "machines" | "recipes" | "products"
): (game: GameData, id: string | T) => T {
  return (game, id) => {
    if (typeof id === "string") {
      const value = game[key][id];
      if (!value) throw new Error(`${key} not found: ${id}`);
      return value as unknown as T;
    }

    return id as T;
  };
}

export const getProduct = getRequired<Product>("products");
export const getMachine = getRequired<Machine>("machines");
export const getRecipe = getRequired<Recipe>("recipes");
