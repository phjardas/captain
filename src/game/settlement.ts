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
  readonly biomassPerItem?: number;
};

export const foods: readonly Food[] = [
  {
    product: "Potato",
    category: "Carbs",
    baseDemandPer1000: 42,
    biomassPerItem: 0.12,
  },
  {
    product: "Corn",
    category: "Carbs",
    baseDemandPer1000: 30,
    biomassPerItem: 0.12,
  },
  {
    product: "Bread",
    category: "Carbs",
    baseDemandPer1000: 20,
    biomassPerItem: 0.072,
  },
  {
    product: "Meat",
    category: "Protein",
    baseDemandPer1000: 27,
    biomassPerItem: 0.17,
  },
  {
    product: "Eggs",
    category: "Protein",
    baseDemandPer1000: 30,
    biomassPerItem: 0.12,
  },
  {
    product: "Tofu",
    category: "Protein",
    baseDemandPer1000: 18,
    biomassPerItem: 0.066,
  },
  {
    product: "Sausage",
    category: "Protein",
    baseDemandPer1000: 33.5,
    biomassPerItem: 0.18,
  },
  {
    product: "Vegetables",
    category: "Vitamins",
    baseDemandPer1000: 42,
    biomassPerItem: 0.12,
  },
  {
    product: "Fruit",
    category: "Vitamins",
    baseDemandPer1000: 31.5,
    biomassPerItem: 0.12,
  },
  {
    product: "Snack",
    category: "Treats",
    baseDemandPer1000: 26,
    biomassPerItem: 0.036,
  },
  {
    product: "Cake",
    category: "Treats",
    baseDemandPer1000: 25,
    biomassPerItem: 0.036,
  },
];

export type HousingTierId = 1 | 2 | 3 | 4;

export type HousingTier = {
  readonly id: HousingTierId;
  readonly name: string;
  readonly factors?: Record<string, number>;
};

export const housingTiers: readonly HousingTier[] = [
  {
    id: 1,
    name: "Housing",
  },
  {
    id: 2,
    name: "Housing II",
    factors: { Electricity: 1.1, Water: 1.05, WasteWater: 1.05 },
  },
  {
    id: 3,
    name: "Housing III",
    factors: {
      Electricity: 1.2,
      Water: 1.1,
      WasteWater: 1.1,
      HouseholdGoods: 1.05,
    },
  },
  {
    id: 4,
    name: "Housing IV",
    factors: {
      Electricity: 1.4,
      Water: 1.2,
      WasteWater: 1.2,
      HouseholdGoods: 1.1,
      HouseholdAppliances: 1.1,
      LuxuryGoods: 1.1,
    },
  },
];

export type ServiceId = "Biomass" | "Recyclables";

export type Service = {
  readonly id: ServiceId;
};

export const services: readonly Service[] = [
  { id: "Biomass" },
  { id: "Recyclables" },
];

export type AmenityId =
  | "HouseholdGoods"
  | "HouseholdAppliances"
  | "LuxuryGoods"
  | "ConsumerElectronics";

export type Amenity = {
  readonly product: AmenityId;
  readonly baseDemandPer1000: number;
  readonly biomassProductionPer1000?: number;
  readonly recyclablesProductionPer1000?: number;
  readonly wasteForRecyclablesProductionPer1000?: number;
};

export const amenities: readonly Amenity[] = [
  {
    product: "HouseholdGoods",
    baseDemandPer1000: 10,
    biomassProductionPer1000: 4.3,
    recyclablesProductionPer1000: 6.8,
    wasteForRecyclablesProductionPer1000: 3.6,
  },
  {
    product: "HouseholdAppliances",
    baseDemandPer1000: 7,
    recyclablesProductionPer1000: 9.4,
    wasteForRecyclablesProductionPer1000: 2.9,
  },
  {
    product: "LuxuryGoods",
    baseDemandPer1000: 3.6,
  },
  {
    product: "ConsumerElectronics",
    baseDemandPer1000: 3.6,
    recyclablesProductionPer1000: 6.1,
    wasteForRecyclablesProductionPer1000: 0.7,
  },
];

export type Settlement = {
  readonly population: number;
  readonly housingTier?: HousingTierId;
  readonly suppliedFoodTypes?: readonly FoodId[];
  readonly suppliedServices?: readonly ServiceId[];
  readonly suppliedAmenities?: readonly AmenityId[];
};

export type ProductDemand = {
  readonly product: string;
  readonly demand: number;
};

export type SettlementDemands = {
  readonly food: readonly ProductDemand[];
  readonly infrastructure: readonly ProductDemand[];
  readonly waste: readonly ProductDemand[];
  readonly amenities: readonly ProductDemand[];
};

export function calculateSettlementDemands(
  settlement: Settlement,
): SettlementDemands {
  const food = calculateFoodDemands(settlement);

  return {
    food,
    infrastructure: [
      ...calculateWaterDemands(settlement),
      ...calculateElectricityDemands(settlement),
    ],
    waste: calculateWasteDemands(settlement, food),
    amenities: calculateAmenitiesDemands(settlement),
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

  return applyHousingFactors(
    suppliedFood.map(
      (food) =>
        ({
          product: food.product,
          demand:
            (food.baseDemandPer1000 * settlement.population) /
            1000 /
            numberOfSuppliedCategories /
            (countsPerCategory[food.category] ?? 1),
        }) satisfies ProductDemand,
    ),
    settlement.housingTier,
  );
}

// visible for tests
export function calculateElectricityDemands(
  settlement: Settlement,
): readonly ProductDemand[] {
  const baseDemandPer1000 = 1100;

  return applyHousingFactors(
    [
      {
        product: "Electricity",
        demand: (baseDemandPer1000 * settlement.population) / 1000,
      },
    ],
    settlement.housingTier,
  );
}

// visible for tests
export function calculateWaterDemands(
  settlement: Settlement,
): readonly ProductDemand[] {
  const baseWaterDemandPer1000 = 47;
  const baseWasteWaterDemandPer1000 = -39.2;

  return applyHousingFactors(
    [
      {
        product: "Water",
        demand: (baseWaterDemandPer1000 * settlement.population) / 1000,
      },
      {
        product: "WasteWater",
        demand: (baseWasteWaterDemandPer1000 * settlement.population) / 1000,
      },
    ],
    settlement.housingTier,
  );
}

// visible for tests
export function calculateWasteDemands(
  settlement: Settlement,
  foodProduction: readonly ProductDemand[],
): readonly ProductDemand[] {
  const baseWastePer1000 = 29.3;

  let waste = (baseWastePer1000 * settlement.population) / 1000;
  let biomass = 0;
  let recyclables = 0;

  const amenitiesBiomass = amenities
    .map((a) =>
      settlement.suppliedAmenities?.includes(a.product)
        ? (a.biomassProductionPer1000 ?? 0) * (settlement.population / 1000)
        : 0,
    )
    .reduce((sum, current) => sum + current, 0);

  const foodBiomass = foods
    .map(
      (food) =>
        (foodProduction.find((p) => p.product === food.product)?.demand ?? 0) *
        (food.biomassPerItem ?? 0),
    )
    .reduce((sum, current) => sum + current, 0);

  const biomassProduction = amenitiesBiomass + foodBiomass;

  if (settlement.suppliedServices?.includes("Biomass")) {
    biomass += biomassProduction;
  } else {
    waste += biomassProduction;
  }

  if (settlement.suppliedServices?.includes("Recyclables")) {
    recyclables += amenities
      .map((a) =>
        settlement.suppliedAmenities?.includes(a.product)
          ? (a.recyclablesProductionPer1000 ?? 0) *
            (settlement.population / 1000)
          : 0,
      )
      .reduce((sum, current) => sum + current, 0);
  } else {
    waste += amenities
      .map((a) =>
        settlement.suppliedAmenities?.includes(a.product)
          ? (a.wasteForRecyclablesProductionPer1000 ?? 0) *
            (settlement.population / 1000)
          : 0,
      )
      .reduce((sum, current) => sum + current, 0);
  }

  return applyHousingFactors(
    [
      { product: "Waste", demand: -waste },
      { product: "Biomass", demand: -biomass },
      { product: "Recyclables", demand: -recyclables },
    ],
    settlement.housingTier,
  );
}

// visible for tests
export function calculateAmenitiesDemands(
  settlement: Settlement,
): readonly ProductDemand[] {
  return applyHousingFactors(
    amenities
      .filter((a) => settlement.suppliedAmenities?.includes(a.product))
      .map(
        (a) =>
          ({
            product: a.product,
            demand: (a.baseDemandPer1000 * settlement.population) / 1000,
          }) satisfies ProductDemand,
      ),
    settlement.housingTier,
  );
}

function applyHousingFactors(
  demands: readonly ProductDemand[],
  housingTierId?: HousingTierId,
): readonly ProductDemand[] {
  const factors =
    housingTiers.find((h) => h.id === housingTierId)?.factors ?? {};

  return demands
    .map((demand) => ({
      ...demand,
      demand: round(demand.demand * (factors[demand.product] ?? 1), 2),
    }))
    .filter((demand) => demand.demand !== 0);
}

function round(value: number, decimals: number): number {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}
