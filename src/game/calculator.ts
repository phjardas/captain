import { getMachine, getRecipe } from "./game.js";
import type { GameData, Machine, Production, Recipe } from "./types.js";

export type CalculatorInput = {
  recipes: ReadonlyArray<{ recipe: string; quantity: number }>;
};

export type OutputRecipe = {
  machine: Machine;
  recipe: Recipe;
  quantity: number;
};

export type CalculatorOutput = {
  recipes: ReadonlyArray<OutputRecipe>;
  production: Production;
  buildCosts: Record<string, number>;
};

export function calculate(
  game: GameData,
  input: CalculatorInput
): CalculatorOutput {
  const recipes: ReadonlyArray<OutputRecipe> = input.recipes.map(
    (recipeInput) => {
      const recipe = getRecipe(game, recipeInput.recipe);
      const machine = getMachine(game, recipe.machine);
      return { machine, recipe, quantity: recipeInput.quantity };
    }
  );

  return {
    recipes,
    production: sumProduction(
      ...recipes.map((m) => multiplyProduction(m.recipe, m.quantity))
    ),
    buildCosts: sumQuantities(
      ...recipes.map((r) =>
        multiplyQuantities(r.machine.buildCosts, r.quantity)
      )
    ),
  };
}

export function combineOutputs(
  ...outputs: Array<CalculatorOutput>
): CalculatorOutput {
  const recipes = outputs
    .flatMap((o) => o.recipes)
    .reduce(
      (agg, recipe) =>
        agg.some((r) => r.recipe === recipe.recipe)
          ? agg.map((r) =>
              r.recipe === recipe.recipe
                ? { ...r, quantity: r.quantity + recipe.quantity }
                : r
            )
          : [...agg, recipe],
      [] as ReadonlyArray<CalculatorOutput["recipes"][number]>
    );

  return {
    recipes,
    production: sumProduction(...outputs.map((o) => o.production)),
    buildCosts: sumQuantities(...outputs.map((o) => o.buildCosts)),
  };
}

function sumProduction(...productions: ReadonlyArray<Production>): Production {
  const quantities = productions.reduce(
    (acc, { inputs, outputs }) => {
      Object.entries(inputs).forEach(
        ([product, quantity]) => (acc[product] = (acc[product] ?? 0) - quantity)
      );
      Object.entries(outputs).forEach(
        ([product, quantity]) => (acc[product] = (acc[product] ?? 0) + quantity)
      );
      return acc;
    },
    {} as Record<string, number>
  );

  const products = Object.entries(quantities).filter(
    ([_, quantity]) => quantity !== 0
  );
  return {
    inputs: Object.fromEntries(
      products
        .filter(([, quantity]) => quantity < 0)
        .map(([product, quantity]) => [product, -quantity])
    ),
    outputs: Object.fromEntries(
      products.filter(([, quantity]) => quantity > 0)
    ),
  };
}

function multiplyProduction(
  { inputs, outputs }: Production,
  factor: number
): Production {
  return sumProduction({
    inputs: Object.fromEntries(
      Object.entries(factor >= 0 ? inputs : outputs).map(
        ([product, quantity]) => [product, Math.abs(factor) * quantity]
      )
    ),
    outputs: Object.fromEntries(
      Object.entries(factor >= 0 ? outputs : inputs).map(
        ([product, quantity]) => [product, Math.abs(factor) * quantity]
      )
    ),
  });
}

function multiplyQuantities(
  products: Record<string, number>,
  factor: number
): Record<string, number> {
  return Object.fromEntries(
    Object.entries(products).map(([product, quantity]) => [
      product,
      factor * quantity,
    ])
  );
}

function sumQuantities(
  ...products: ReadonlyArray<Record<string, number>>
): Record<string, number> {
  return products
    .flatMap((p) => Object.entries(p))
    .reduce(
      (acc, [product, quantity]) => ({
        ...acc,
        [product]: (acc[product] ?? 0) + quantity,
      }),
      {} as Record<string, number>
    );
}
