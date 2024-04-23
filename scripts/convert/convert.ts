import type {
  GameData,
  Identifiable,
  Machine,
  Product,
  ProductType,
  Recipe,
} from "../../src/game/types.js";
import {
  computingExType,
  countableItemType,
  electricityExType,
  fluidItemType,
  looseItemType,
  maintenanceExType,
  mechPowerExType,
  moltenItemType,
  pollutionExType,
  unityExType,
  virtualItemType,
  workerExType,
  type Data,
  type ExType,
  type Item,
  type Recipe as RecipeData,
} from "./types.js";

const ignoredProducts = [
  "AnyCountableProduct",
  "AnyFluidProduct",
  "AnyLooseProduct",
  "AnyMoltenProduct",
  "AnyVirtualProduct",
];

const ignoredMachines = [
  "StorageFluid",
  "StorageUnit",
  "StorageLoose",
  "AnyMoltenStorage",
  "AnyVirtualStorage",
];

export function convertGameData(
  data: Data,
  images: Record<string, string>
): GameData {
  const products: Record<string, Product> = toMap(
    data.items
      .filter(
        (item) =>
          !item.isAbstractClassItem &&
          item.type !== undefined &&
          !ignoredProducts.includes(item.name)
      )
      .map((item) => ({
        id: item.name,
        name: item.label,
        icon: images[item.image],
        type: getItemType(item),
      }))
  );

  const getProduct = (name: string): Product => {
    const product = products[name];
    if (!product) throw new Error(`Unknown product: ${name}`);
    return product;
  };

  const recipeDictionary = Object.fromEntries(
    data.recipeDictionaries.map((entry) => [entry.name, entry.recipes])
  );

  const recipes: Array<Recipe> = [];

  const machines: Array<Machine> = data.items
    .filter(
      (item) =>
        item.recipe !== undefined && !ignoredMachines.includes(item.name)
    )
    .map((item) => {
      const itemRecipes: Array<Recipe> = (
        recipeDictionary[item.recipe!.recipeDictionary] ?? []
      ).map((recipe) => ({
        id: recipe.name,
        duration: recipe.time,
        machine: item.name,
        inputs: Object.fromEntries(
          recipe.input
            ?.filter((input) => !input.name.startsWith("Any"))
            ?.map((input) =>
              perMinute(getProduct(input.name), input.count, recipe, "input")
            ) ?? []
        ),
        outputs: Object.fromEntries(
          recipe.output
            ?.filter((output) => !output.name.startsWith("Any"))
            ?.map((output) =>
              perMinute(getProduct(output.name), output.count, recipe, "output")
            ) ?? []
        ),
      }));

      recipes.push(...itemRecipes);

      return {
        id: item.name,
        name: item.label,
        icon: images[item.image],
        buildCosts: Object.fromEntries(
          item.cost?.map((cost) => [cost.name, cost.count]) ?? []
        ),
      };
    });

  return {
    products,
    machines: toMap(machines),
    recipes: toMap(recipes),
  };
}

function getItemType({ name, type, exdata }: Item): ProductType {
  switch (type) {
    case fluidItemType:
      return "fluid";
    case countableItemType:
      return "countable";
    case looseItemType:
      return "loose";
    case moltenItemType:
      return "molten";
    case virtualItemType:
      if (name === "Research") return "countable";
      if (!exdata?.exType)
        throw new Error(`Virtual item without exdata: ${name}`);
      return getVirtualItemType(exdata?.exType);
    default:
      throw new Error(`Unknown item type in product ${name}: ${type}`);
  }
}

function getVirtualItemType(extype: ExType): ProductType {
  switch (extype) {
    case electricityExType:
      return "electricity";
    case mechPowerExType:
      return "mech";
    case computingExType:
      return "computing";
    case maintenanceExType:
      return "maintenance";
    case pollutionExType:
      return "pollution";
    case workerExType:
      return "worker";
    case unityExType:
      return "unity";
    default:
      throw new Error(`Unknown ex type in virtual item: ${extype}`);
  }
}

function toMap<T extends Identifiable>(
  values: ReadonlyArray<T>
): Record<string, T> {
  return Object.fromEntries(
    values.toSorted((a, b) => a.id.localeCompare(b.id)).map((p) => [p.id, p])
  );
}

const timedProductTypes: Array<ProductType> = [
  "fluid",
  "countable",
  "loose",
  "molten",
  "pollution",
];

function perMinute(
  product: Product,
  count: number,
  { time }: RecipeData,
  direction: "input" | "output"
): [string, number] {
  return [
    product.id,

    (timedProductTypes.includes(product.type) ||
      (direction == "output" && product.type === "maintenance")) &&
    time
      ? (count * 60) / time
      : count,
  ];
}
