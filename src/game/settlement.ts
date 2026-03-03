export type FoodId =
  | "Potato"
  | "Corn"
  | "Bread"
  | "Meat"
  | "Eggs"
  | "Tofu"
  | "Sausage"
  | "Vegetables"
  | "Fruit"
  | "Snack"
  | "Cake";

export type FoodCategory = "Carbs" | "Protein" | "Vitamins" | "Treats";

export type Food = {
  readonly product: FoodId;
  readonly category: FoodCategory;
  readonly baseDemandPer1000: number;
};

export const foods: readonly Food[] = [
  { product: "Potato", category: "Carbs", baseDemandPer1000: 42 },
  { product: "Corn", category: "Carbs", baseDemandPer1000: 30 },
  { product: "Bread", category: "Carbs", baseDemandPer1000: 20 },
  { product: "Meat", category: "Protein", baseDemandPer1000: 27 },
  { product: "Eggs", category: "Protein", baseDemandPer1000: 30 },
  { product: "Tofu", category: "Protein", baseDemandPer1000: 18 },
  { product: "Sausage", category: "Protein", baseDemandPer1000: 33.5 },
  { product: "Vegetables", category: "Vitamins", baseDemandPer1000: 42 },
  { product: "Fruit", category: "Vitamins", baseDemandPer1000: 31.5 },
  { product: "Snack", category: "Treats", baseDemandPer1000: 26 },
  { product: "Cake", category: "Treats", baseDemandPer1000: 25 },
];

export type HousingTierId = 1 | 2 | 3 | 4;

export type HousingTier = {
  readonly id: HousingTierId;
  readonly name: string;
  readonly electricityFactor?: number;
  readonly waterFactor?: number;
};

export const housingTiers: readonly HousingTier[] = [
  {
    id: 1,
    name: "Housing",
  },
  {
    id: 2,
    name: "Housing II",
    electricityFactor: 1.1,
    waterFactor: 1.05,
  },
  {
    id: 3,
    name: "Housing III",
    electricityFactor: 1.2,
    waterFactor: 1.1,
  },
  {
    id: 4,
    name: "Housing IV",
    electricityFactor: 1.4,
    waterFactor: 1.2,
  },
];

export type Settlement = {
  readonly population: number;
  readonly housingTier?: HousingTierId;
  readonly suppliedFoodTypes?: readonly FoodId[];
};

export type ProductDemand = {
  readonly product: string;
  readonly demand: number;
};

export type SettlementDemands = {
  readonly food: readonly ProductDemand[];
  readonly infrastructure: readonly ProductDemand[];
};

export function calculateSettlementDemands(
  settlement: Settlement,
): SettlementDemands {
  return {
    food: calculateFoodDemands(settlement),
    infrastructure: [
      ...calculateWaterDemands(settlement),
      ...calculateElectricityDemands(settlement),
    ],
  };
}

// visible for tests
export function calculateFoodDemands(
  settlement: Settlement,
): readonly ProductDemand[] {
  const suppliedFood = foods.filter((food) =>
    settlement.suppliedFoodTypes?.includes(food.product),
  );

  const countsPerCategory = suppliedFood.reduce<Record<FoodCategory, number>>(
    (acc, food) => {
      acc[food.category] = (acc[food.category] ?? 0) + 1;
      return acc;
    },
    {} as Record<FoodCategory, number>,
  );

  const numberOfSuppliedCategories = Object.keys(countsPerCategory).length;

  return suppliedFood.map(
    (food) =>
      ({
        product: food.product,
        demand: round(
          (food.baseDemandPer1000 * settlement.population) /
            1000 /
            numberOfSuppliedCategories /
            (countsPerCategory[food.category] ?? 1),
          3,
        ),
      }) satisfies ProductDemand,
  );
}

// visible for tests
export function calculateElectricityDemands(
  settlement: Settlement,
): readonly ProductDemand[] {
  const baseDemandPer1000 = 1100;
  const housingTierFactor =
    housingTiers.find((h) => h.id === settlement.housingTier)
      ?.electricityFactor ?? 1;

  return [
    {
      product: "Electricity",
      demand: round(
        ((baseDemandPer1000 * settlement.population) / 1000) *
          housingTierFactor,
        3,
      ),
    },
  ];
}

// visible for tests
export function calculateWaterDemands(
  settlement: Settlement,
): readonly ProductDemand[] {
  const baseWaterDemandPer1000 = 47;
  const baseWasteWaterDemandPer1000 = -39.2;
  const housingTierFactor =
    housingTiers.find((h) => h.id === settlement.housingTier)?.waterFactor ?? 1;

  return [
    {
      product: "Water",
      demand: round(
        ((baseWaterDemandPer1000 * settlement.population) / 1000) *
          housingTierFactor,
        3,
      ),
    },
    {
      product: "WasteWater",
      demand: round(
        ((baseWasteWaterDemandPer1000 * settlement.population) / 1000) *
          housingTierFactor,
        3,
      ),
    },
  ];
}

function round(value: number, decimals: number): number {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}
