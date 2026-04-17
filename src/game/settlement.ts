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
  readonly unity?: number;
};

export const foods: readonly Food[] = [
  {
    product: "Potato",
    category: "Carbs",
    baseDemandPer1000: 42,
    biomassPerItem: 0.12,
    unity: 0.15,
  },
  {
    product: "Corn",
    category: "Carbs",
    baseDemandPer1000: 30,
    biomassPerItem: 0.12,
    unity: 0.15,
  },
  {
    product: "Bread",
    category: "Carbs",
    baseDemandPer1000: 20,
    biomassPerItem: 0.072,
    unity: 0.3,
  },
  {
    product: "Meat",
    category: "Protein",
    baseDemandPer1000: 27,
    biomassPerItem: 0.17,
    unity: 0.4,
  },
  {
    product: "Eggs",
    category: "Protein",
    baseDemandPer1000: 30,
    biomassPerItem: 0.12,
    unity: 0.3,
  },
  {
    product: "Tofu",
    category: "Protein",
    baseDemandPer1000: 18,
    biomassPerItem: 0.066,
    unity: 0.3,
  },
  {
    product: "Sausage",
    category: "Protein",
    baseDemandPer1000: 33.5,
    biomassPerItem: 0.18,
    unity: 0.1,
  },
  {
    product: "Vegetables",
    category: "Vitamins",
    baseDemandPer1000: 42,
    biomassPerItem: 0.12,
    unity: 0.2,
  },
  {
    product: "Fruit",
    category: "Vitamins",
    baseDemandPer1000: 31.5,
    biomassPerItem: 0.12,
    unity: 0.3,
  },
  {
    product: "Snack",
    category: "Treats",
    baseDemandPer1000: 26,
    biomassPerItem: 0.036,
    unity: 0.25,
  },
  {
    product: "Cake",
    category: "Treats",
    baseDemandPer1000: 25,
    biomassPerItem: 0.036,
    unity: 0.55,
  },
];

export type EdictId =
  | "FoodSaver"
  | "PlentyOfFood"
  | "MoreHouseholdGoods"
  | "MoreHouseholdAppliances"
  | "MoreConsumerElectronics"
  | "WaterSaver";

export type EdictLevel = {
  readonly label: string;
  readonly demandFactor: number;
  readonly unityAmount?: number;
  readonly unityFactor?: number;
};

export type Edict = {
  readonly id: EdictId;
  readonly name: string;
  readonly levels: readonly EdictLevel[];
};

export const edicts: readonly Edict[] = [
  {
    id: "FoodSaver",
    name: "Food Saver",
    levels: [
      { label: "Level 1 (-20%)", demandFactor: 0.8, unityAmount: -1 },
      { label: "Level 2 (-30%)", demandFactor: 0.7, unityAmount: -2 },
    ],
  },
  {
    id: "PlentyOfFood",
    name: "Plenty of Food",
    levels: [
      { label: "Level 1 (+20%)", demandFactor: 1.2, unityAmount: 1 },
      { label: "Level 2 (+40%)", demandFactor: 1.4, unityAmount: 2 },
    ],
  },
  {
    id: "MoreHouseholdGoods",
    name: "More Household Goods",
    levels: [
      { label: "Level 1 (+20%)", demandFactor: 1.2, unityFactor: 1.2 },
      { label: "Level 2 (+40%)", demandFactor: 1.4, unityFactor: 1.2 * 1.2 },
      {
        label: "Level 3 (+70%)",
        demandFactor: 1.7,
        unityFactor: 1.2 * 1.2 * 1.2,
      },
    ],
  },
  {
    id: "MoreHouseholdAppliances",
    name: "More Household Appliances",
    levels: [
      { label: "Level 1 (+20%)", demandFactor: 1.2, unityFactor: 1.2 },
      { label: "Level 2 (+40%)", demandFactor: 1.4, unityFactor: 1.2 * 1.2 },
      {
        label: "Level 3 (+70%)",
        demandFactor: 1.7,
        unityFactor: 1.2 * 1.2 * 1.2,
      },
    ],
  },
  {
    id: "MoreConsumerElectronics",
    name: "More Consumer Electronics",
    levels: [
      { label: "Level 1 (+20%)", demandFactor: 1.2, unityFactor: 1.2 },
      { label: "Level 2 (+40%)", demandFactor: 1.4, unityFactor: 1.2 * 1.2 },
      {
        label: "Level 3 (+70%)",
        demandFactor: 1.7,
        unityFactor: 1.2 * 1.2 * 1.2,
      },
    ],
  },
  {
    id: "WaterSaver",
    name: "Water Saver",
    levels: [
      {
        label: "Level 1 (-15%)",
        demandFactor: 0.85,
        unityFactor: 1.2,
        unityAmount: -1,
      },
      {
        label: "Level 2 (-27%)",
        demandFactor: 0.73,
        unityFactor: 1.2,
        unityAmount: -2,
      },
      {
        label: "Level 3 (-35%)",
        demandFactor: 0.65,
        unityFactor: 1.2,
        unityAmount: -3,
      },
    ],
  },
];

export type HousingTierId = 1 | 2 | 3 | 4;

export type HousingTier = {
  readonly id: HousingTierId;
  readonly name: string;
  readonly unityFactor: (provided: {
    readonly electricity?: boolean;
    readonly water?: boolean;
    readonly householdGoods?: boolean;
    readonly householdAppliances?: boolean;
    readonly consumerElectronics?: boolean;
  }) => number;
  readonly factors: Record<string, number>;
};

const housingTier1: HousingTier = {
  id: 1,
  name: "Housing",
  factors: {},
  unityFactor: () => 1,
};

const housingTier2: HousingTier = {
  id: 2,
  name: "Housing II",
  factors: { Electricity: 1.1, Water: 1.05, WasteWater: 1.05, Unity: 1.5 },
  unityFactor: (provided) =>
    provided.electricity && provided.water
      ? 1.5
      : housingTier1.unityFactor(provided),
};

const housingTier3: HousingTier = {
  id: 3,
  name: "Housing III",
  factors: {
    Electricity: 1.2,
    Water: 1.1,
    WasteWater: 1.1,
    HouseholdGoods: 1.05,
  },
  unityFactor: (provided) =>
    provided.electricity && provided.water && provided.householdGoods
      ? provided.householdAppliances
        ? 2
        : 1.75
      : housingTier2.unityFactor(provided),
};

const housingTier4: HousingTier = {
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
  unityFactor: (provided) =>
    provided.electricity &&
    provided.water &&
    provided.householdGoods &&
    provided.householdAppliances &&
    provided.consumerElectronics
      ? 2.25
      : housingTier3.unityFactor(provided),
};

export const housingTiers: readonly HousingTier[] = [
  housingTier1,
  housingTier2,
  housingTier3,
  housingTier4,
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
  readonly unity?: (settlement: Settlement) => number;
};

export const amenities: readonly Amenity[] = [
  {
    product: "HouseholdGoods",
    baseDemandPer1000: 10,
    biomassProductionPer1000: 4.3,
    recyclablesProductionPer1000: 6.8,
    wasteForRecyclablesProductionPer1000: 3.6,
    unity: () => 1.4,
  },
  {
    product: "HouseholdAppliances",
    baseDemandPer1000: 7,
    recyclablesProductionPer1000: 9.4,
    wasteForRecyclablesProductionPer1000: 2.9,
    unity: () => 1.4,
  },
  {
    product: "LuxuryGoods",
    baseDemandPer1000: 3.6,
    unity: (settlement) => (settlement.population / 10000) * 3.6,
  },
  {
    product: "ConsumerElectronics",
    baseDemandPer1000: 3.6,
    recyclablesProductionPer1000: 6.1,
    wasteForRecyclablesProductionPer1000: 0.7,
    unity: () => 1.8,
  },
];

export type MedicalSupplyId =
  | "MedicalSupplies"
  | "MedicalSupplies2"
  | "MedicalSupplies3";

export type MedicalSupply = {
  readonly product: MedicalSupplyId;
  readonly baseDemandPer1000: number;
  readonly unity: number;
  readonly health: number;
};

export const medicalSupplies: readonly MedicalSupply[] = [
  { product: "MedicalSupplies", baseDemandPer1000: 5.4, unity: 0.6, health: 15 },
  { product: "MedicalSupplies2", baseDemandPer1000: 5.4, unity: 0.8, health: 20 },
  { product: "MedicalSupplies3", baseDemandPer1000: 5.4, unity: 1.2, health: 25 },
];

export type DifficultyLevel = {
  readonly label: string;
  readonly factor: number;
};

export const consumptionDifficultyLevels: readonly DifficultyLevel[] = [
  { label: "-40%", factor: 0.6 },
  { label: "-20%", factor: 0.8 },
  { label: "Standard", factor: 1.0 },
  { label: "+20%", factor: 1.2 },
  { label: "+40%", factor: 1.4 },
];

export type Difficulty = {
  readonly foodConsumption?: number;
  readonly goodsConsumption?: number;
};

export type Settlement = {
  readonly population: number;
  readonly housingTier?: HousingTierId;
  readonly suppliedFoodTypes?: readonly FoodId[];
  readonly suppliedServices?: readonly ServiceId[];
  readonly suppliedAmenities?: readonly AmenityId[];
  readonly suppliedMedicalSupply?: MedicalSupplyId;
  readonly activeEdicts?: Partial<Record<EdictId, number>>;
  readonly difficulty?: Difficulty;
};

export type ProductDemand = {
  readonly product: string;
  readonly demand: number;
};

type UnitySummary = {
  readonly total: number;
  readonly edicts: number;
  readonly food: number;
  readonly infrastructure: number;
  readonly amenities: number;
  readonly medicine: number;
};

type HealthSummary = {
  readonly total: number;
  readonly food: number;
  readonly water: number;
  readonly medicine: number;
};

export type SettlementDemands = {
  readonly food: readonly ProductDemand[];
  readonly infrastructure: readonly ProductDemand[];
  readonly waste: readonly ProductDemand[];
  readonly amenities: readonly ProductDemand[];
  readonly medicalSupply: readonly ProductDemand[];
  readonly unity: UnitySummary;
  readonly health: HealthSummary;
};

export function calculateSettlementDemands(
  settlement: Settlement,
): SettlementDemands {
  const water = calculateWaterDemands(settlement);
  const electricity = calculateElectricityDemands(settlement);
  const infrastructure = [...water, ...electricity];

  const food = calculateFoodDemands(settlement);
  const amenities = calculateAmenitiesDemands(settlement);
  const waste = calculateWasteDemands(settlement, food);
  const medicalSupply = calculateMedicalSupplyDemands(settlement);
  const demands = [...infrastructure, ...amenities, ...food];

  const unity = calculateUnity(settlement, demands);
  const health = calculateHealth(settlement, demands);

  return {
    food,
    infrastructure,
    waste,
    amenities,
    medicalSupply,
    unity,
    health,
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

  const foodFactor =
    getEdictFactor(settlement.activeEdicts, "FoodSaver").demandFactor *
    getEdictFactor(settlement.activeEdicts, "PlentyOfFood").demandFactor *
    (settlement.difficulty?.foodConsumption ?? 1);

  return applyHousingFactors(
    suppliedFood.map(
      (food) =>
        ({
          product: food.product,
          demand:
            ((food.baseDemandPer1000 * settlement.population) /
              1000 /
              numberOfSuppliedCategories /
              (countsPerCategory[food.category] ?? 1)) *
            foodFactor,
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
  const waterFactor = getEdictFactor(
    settlement.activeEdicts,
    "WaterSaver",
  ).demandFactor;

  return applyHousingFactors(
    [
      {
        product: "Water",
        demand:
          ((baseWaterDemandPer1000 * settlement.population) / 1000) *
          waterFactor,
      },
      {
        product: "WasteWater",
        demand:
          ((baseWasteWaterDemandPer1000 * settlement.population) / 1000) *
          waterFactor,
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
  const amenityEdictFactors: Partial<Record<AmenityId, number>> = {
    HouseholdGoods: getEdictFactor(
      settlement.activeEdicts,
      "MoreHouseholdGoods",
    ).demandFactor,
    HouseholdAppliances: getEdictFactor(
      settlement.activeEdicts,
      "MoreHouseholdAppliances",
    ).demandFactor,
  };

  const goodsFactor = settlement.difficulty?.goodsConsumption ?? 1;

  return applyHousingFactors(
    amenities
      .filter((a) => settlement.suppliedAmenities?.includes(a.product))
      .map(
        (a) =>
          ({
            product: a.product,
            demand:
              ((a.baseDemandPer1000 * settlement.population) / 1000) *
              (amenityEdictFactors[a.product] ?? 1) *
              goodsFactor,
          }) satisfies ProductDemand,
      ),
    settlement.housingTier,
  );
}

function calculateMedicalSupplyDemands(
  settlement: Settlement,
): readonly ProductDemand[] {
  const supply = medicalSupplies.find(
    (m) => m.product === settlement.suppliedMedicalSupply,
  );
  if (!supply) return [];

  return [
    {
      product: supply.product,
      demand: (supply.baseDemandPer1000 * settlement.population) / 1000,
    },
  ];
}

// visible for tests
export function calculateUnity(
  settlement: Settlement,
  demands: readonly ProductDemand[],
): UnitySummary {
  const housingTier = housingTiers.find((h) => h.id === settlement.housingTier);

  const hasElectricity = demands.some(
    (d) => d.product === "Electricity" && d.demand > 0,
  );
  const hasWater = demands.some((d) => d.product === "Water" && d.demand > 0);
  const hasHouseholdGoods = demands.some(
    (d) => d.product === "HouseholdGoods" && d.demand > 0,
  );
  const hasHouseholdAppliances = demands.some(
    (d) => d.product === "HouseholdAppliances" && d.demand > 0,
  );
  const hasConsumerElectronics = demands.some(
    (d) => d.product === "ConsumerElectronics" && d.demand > 0,
  );

  const unityFactor =
    housingTier?.unityFactor?.({
      electricity: hasElectricity,
      water: hasWater,
      householdGoods: hasHouseholdGoods,
      householdAppliances: hasHouseholdAppliances,
      consumerElectronics: hasConsumerElectronics,
    }) ?? 1;

  const edictsUnity = settlement.activeEdicts
    ? Object.entries(settlement.activeEdicts).reduce(
        (sum, [edictId, level]) => {
          const edict = edicts.find((e) => e.id === edictId);
          const edictLevel = edict?.levels[level - 1];
          return sum + (edictLevel?.unityAmount ?? 0);
        },
        0,
      )
    : 0;

  const infrastructureUnity =
    ((hasWater ? 1 : 0) + (hasElectricity ? 1.2 : 0)) * unityFactor;

  const foodUnity =
    // base
    unityFactor +
    // variety
    demands.reduce((sum, current) => {
      if (current.demand <= 0) return sum;
      const foodData = foods.find((f) => f.product === current.product);
      return sum + (foodData?.unity ?? 0);
    }, 0);

  const amenitiesUnity =
    demands.reduce((sum, current) => {
      if (current.demand <= 0) return sum;
      const amenityData = amenities.find((a) => a.product === current.product);
      const unityFactor =
        getEdictFactor(
          settlement.activeEdicts,
          `More${current.product}` as EdictId,
        ).unityFactor ?? 1;
      return sum + (amenityData?.unity?.(settlement) ?? 0) * unityFactor;
    }, 0) * unityFactor;

  const medicineUnity =
    medicalSupplies.find((m) => m.product === settlement.suppliedMedicalSupply)
      ?.unity ?? 0;

  // FIXME add unity from internet
  // FIXME add unity from square

  return {
    total:
      edictsUnity +
      foodUnity +
      amenitiesUnity +
      infrastructureUnity +
      medicineUnity,
    edicts: edictsUnity,
    food: foodUnity,
    amenities: amenitiesUnity,
    infrastructure: infrastructureUnity,
    medicine: medicineUnity,
  };
}

// visible for tests
function calculateHealth(
  settlement: Settlement,
  demands: readonly ProductDemand[],
): HealthSummary {
  const foodCategoriesCount = demands
    .map((d) => foods.find((f) => f.product === d.product)?.category)
    .filter(Boolean)
    .filter((v, i, a) => a.indexOf(v) === i).length;
  const food = (foodCategoriesCount - 1) * 4;

  const water = demands.some((d) => d.product === "Water" && d.demand > 0)
    ? 10
    : 0;

  const medicine =
    medicalSupplies.find((m) => m.product === settlement.suppliedMedicalSupply)
      ?.health ?? 0;

  return {
    total: food + water + medicine,
    food,
    water,
    medicine,
  };
}

function getEdictFactor(
  activeEdicts: Partial<Record<EdictId, number>> | undefined,
  edictId: EdictId,
): { readonly demandFactor: number; readonly unityFactor?: number } {
  const level = activeEdicts?.[edictId];
  if (!level) return { demandFactor: 1 };
  const edict = edicts.find((e) => e.id === edictId);
  return edict?.levels[level - 1] ?? { demandFactor: 1 };
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
