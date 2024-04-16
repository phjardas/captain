import { gameData } from "./data.js";
import type {
  Category,
  Game,
  GameData,
  Machine,
  Product,
  Recipe,
} from "./types.js";

export async function loadGame(): Promise<Game> {
  return new GameImpl(gameData);
}

class GameImpl implements Game {
  readonly categories: Record<string, Category>;
  readonly machines: Record<string, Machine>;
  readonly products: Record<string, Product>;
  readonly recipes: Record<string, Recipe>;

  constructor(data: GameData) {
    this.categories = data.categories;
    this.machines = data.machines;
    this.products = data.products;
    this.recipes = data.recipes;
  }

  getCategory(id: string): Category {
    return this.categories[id];
  }

  getMachine(id: string): Machine {
    return this.machines[id];
  }

  getProduct(id: string): Product {
    return this.products[id];
  }

  getRecipe(id: string): Recipe {
    return this.recipes[id];
  }
}
