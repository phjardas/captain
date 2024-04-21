import type {
  GameData,
  Identifiable,
  Machine,
  Product,
  Recipe,
} from "../../src/game/types.js";
import {
  countableItemType,
  fluidItemType,
  looseItemType,
  moltenItemType,
  type Data,
  type ItemType,
  type Recipe as RecipeData,
} from "./types.js";

export function convertGameData(data: Data): GameData {
  const recipeDictionary = Object.fromEntries(
    data.recipeDictionaries.map((entry) => [entry.name, entry.recipes])
  );

  const recipes: Array<Recipe> = [];

  const machines: Array<Machine> = data.items
    .filter((item) => item.recipe !== undefined)
    .map((item) => {
      const itemRecipes: Array<Recipe> = (
        recipeDictionary[item.recipe!.recipeDictionary] ?? []
      ).map((recipe) => ({
        id: recipe.name,
        // TODO
        name: recipe.name,
        duration: recipe.time,
        machine: item.name,
        inputs:
          recipe.input
            ?.filter((input) => !input.flags)
            ?.map((input) => ({
              product: input.name,
              quantity: (input.count * 60) / recipe.time,
            })) ?? [],
        outputs:
          recipe.output
            ?.filter((output) => !output.flags)
            ?.map((output) => ({
              product: output.name,
              quantity: (output.count * 60) / recipe.time,
            })) ?? [],
        electricityProduction: sumByName(recipe, "Electricity"),
        computingProduction: sumByName(recipe, "Computing"),
        // workers: sumByName(recipe, "Worker"),
      }));

      recipes.push(...itemRecipes);

      return {
        id: item.name,
        name: item.label,
        icon: item.image,
        buildCosts:
          item.cost?.map((cost) => ({
            product: cost.name,
            quantity: cost.count,
          })) ?? [],
        recipes: itemRecipes.map((r) => r.id),
        products: {
          input: itemRecipes
            .flatMap((r) => r.inputs.map((i) => i.product))
            .toSorted()
            .filter((v, i, a) => a.indexOf(v) === i),
          output: itemRecipes
            .flatMap((r) => r.outputs.map((i) => i.product))
            .toSorted()
            .filter((v, i, a) => a.indexOf(v) === i),
        },
      };
    });

  const itemTypes: Array<ItemType> = [
    fluidItemType,
    countableItemType,
    looseItemType,
    moltenItemType,
  ];

  const products: Array<Product> = data.items
    .filter(
      (item) =>
        !item.isAbstractClassItem &&
        item.type !== undefined &&
        itemTypes.includes(item.type)
    )
    .map((item) => ({
      id: item.name,
      name: item.label,
      icon: item.image,
      recipes: {
        input: recipes
          .filter((r) => r.inputs.some((i) => i.product === item.name))
          .map((r) => r.id),
        output: recipes
          .filter((r) => r.outputs.some((o) => o.product === item.name))
          .map((r) => r.id),
      },
      machines: {
        input: machines
          .filter((m) => m.products.input.includes(item.name))
          .map((m) => m.id),
        output: machines
          .filter((m) => m.products.output.includes(item.name))
          .map((m) => m.id),
      },
    }));

  return {
    machines: toMap(machines),
    products: toMap(products),
    recipes: toMap(recipes),
  };
}

function toMap<T extends Identifiable>(
  values: ReadonlyArray<T>
): Record<string, T> {
  return Object.fromEntries(
    values.toSorted((a, b) => a.id.localeCompare(b.id)).map((p) => [p.id, p])
  );
}

function sumByName(recipe: RecipeData, name: string): number {
  return [
    ...(recipe.input
      ?.filter((i) => i.name === name)
      ?.map((i) => (-i.count * 60) / recipe.time) ?? []),
    ...(recipe.output
      ?.filter((i) => i.name === name)
      ?.map((i) => (i.count * 60) / recipe.time) ?? []),
  ].reduce((a, b) => a + b, 0);
}
