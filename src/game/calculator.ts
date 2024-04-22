import { getMachine, getRecipe } from "./game.js";
import type { Machine, ProductQuantity, Production, Recipe } from "./types.js";

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
  buildCosts: ReadonlyArray<ProductQuantity>;
};

export function calculate(input: CalculatorInput): CalculatorOutput {
  const recipes: ReadonlyArray<OutputRecipe> = input.recipes.map(
    (recipeInput) => {
      const recipe = getRecipe(recipeInput.recipe);
      const machine = getMachine(recipe.machine);
      return { machine, recipe, quantity: recipeInput.quantity };
    }
  );

  return {
    recipes,
    production: sumProduction(
      ...recipes.map((m) => multiplyProduction(m.recipe, m.quantity))
    ),
    buildCosts: sumQuantities(
      ...recipes.flatMap((r) =>
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
    buildCosts: sumQuantities(...outputs.flatMap((o) => o.buildCosts)),
  };
}

function sumProduction(...productions: ReadonlyArray<Production>): Production {
  const quantities = productions.reduce(
    (acc, { inputs, outputs }) => {
      inputs.forEach(
        ({ product, quantity }) =>
          (acc[product] = (acc[product] ?? 0) - quantity)
      );
      outputs.forEach(
        ({ product, quantity }) =>
          (acc[product] = (acc[product] ?? 0) + quantity)
      );
      return acc;
    },
    {} as Record<string, number>
  );

  const products = Object.entries(quantities)
    .filter(([_, quantity]) => quantity !== 0)
    .map(([product, quantity]) => ({
      product,
      quantity,
    }));

  return {
    inputs: products
      .filter((p) => p.quantity < 0)
      .map(({ product, quantity }) => ({ product, quantity: -quantity }))
      .sort((a, b) => b.quantity - a.quantity),
    outputs: products
      .filter((p) => p.quantity > 0)
      .sort((a, b) => b.quantity - a.quantity),
  };
}

function multiplyProduction(
  { inputs, outputs }: Production,
  factor: number
): Production {
  return sumProduction({
    inputs: (factor >= 0 ? inputs : outputs).map(({ product, quantity }) => ({
      product,
      quantity: Math.abs(factor) * quantity,
    })),
    outputs: (factor >= 0 ? outputs : inputs).map(({ product, quantity }) => ({
      product,
      quantity: Math.abs(factor) * quantity,
    })),
  });
}

function multiplyQuantities(
  products: ReadonlyArray<ProductQuantity>,
  factor: number
): ReadonlyArray<ProductQuantity> {
  return products.map(({ product, quantity }) => ({
    product,
    quantity: factor * quantity,
  }));
}

function sumQuantities(
  ...products: ReadonlyArray<ProductQuantity>
): ReadonlyArray<ProductQuantity> {
  return Object.entries(
    products.reduce(
      (acc, { product, quantity }) => ({
        ...acc,
        [product]: (acc[product] ?? 0) + quantity,
      }),
      {} as Record<string, number>
    )
  )
    .map(([product, quantity]) => ({ product, quantity }))
    .toSorted((a, b) => b.quantity - a.quantity);
}
