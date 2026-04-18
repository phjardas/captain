import { describe, expect, it } from "vitest";
import {
  calculateElectricityDemands,
  calculateFoodDemands,
  calculateSettlementDemands,
  calculateUnity,
  calculateWaterDemands,
} from "./settlement.js";

describe("calculateFoodDemands", () => {
  it("should calculate demands with only one food", () => {
    const demands = calculateFoodDemands({
      population: 500,
      suppliedFoodTypes: ["Potato"],
    });

    expect(demands).toEqual([{ product: "Potato", demand: 21 }]);
  });

  it("should calculate demands with two food from same category", () => {
    const demands = calculateFoodDemands({
      population: 500,
      suppliedFoodTypes: ["Potato", "Corn"],
    });

    expect(demands).toEqual([
      { product: "Potato", demand: 10.5 },
      { product: "Corn", demand: 7.5 },
    ]);
  });

  it("should calculate demands with two food from different categories", () => {
    const demands = calculateFoodDemands({
      population: 500,
      suppliedFoodTypes: ["Potato", "Meat"],
    });

    expect(demands).toEqual([
      { product: "Potato", demand: 10.5 },
      { product: "Meat", demand: 6.75 },
    ]);
  });

  it("should calculate demands with mixed food", () => {
    const demands = calculateFoodDemands({
      population: 1854,
      suppliedFoodTypes: ["Potato", "Corn", "Bread", "Tofu", "Vegetables"],
    });

    expect(demands).toEqual([
      { product: "Potato", demand: 8.65 },
      { product: "Corn", demand: 6.18 },
      { product: "Bread", demand: 4.12 },
      { product: "Tofu", demand: 11.12 },
      { product: "Vegetables", demand: 25.96 },
    ]);
  });
});

describe("calculateWaterDemands", () => {
  it("should calculate demands for housing tier 1", () => {
    const demands = calculateWaterDemands({
      population: 500,
      housingTier: 1,
    });

    expect(demands).toEqual([
      { product: "Water", demand: 23.5 },
      { product: "WasteWater", demand: -19.6 },
    ]);
  });

  it("should calculate demands for housing tier 2", () => {
    const demands = calculateWaterDemands({
      population: 500,
      housingTier: 2,
    });

    expect(demands).toEqual([
      { product: "Water", demand: 24.68 },
      { product: "WasteWater", demand: -20.58 },
    ]);
  });

  it("should calculate demands for housing tier 3", () => {
    const demands = calculateWaterDemands({
      population: 500,
      housingTier: 3,
    });

    expect(demands).toEqual([
      { product: "Water", demand: 25.85 },
      { product: "WasteWater", demand: -21.56 },
    ]);
  });

  it("should calculate demands for housing tier 4", () => {
    const demands = calculateWaterDemands({
      population: 500,
      housingTier: 4,
    });

    expect(demands).toEqual([
      { product: "Water", demand: 28.2 },
      { product: "WasteWater", demand: -23.52 },
    ]);
  });

  it("should apply Settlement Water Use infinite research", () => {
    const demands = calculateWaterDemands({
      population: 1000,
      housingTier: 1,
      infiniteResearch: { SettlementWaterUse: 10 },
    });

    expect(demands).toEqual([
      { product: "Water", demand: 37.6 },
      { product: "WasteWater", demand: -31.36 },
    ]);
  });
});

describe("calculateElectricityDemands", () => {
  it("should calculate demands for housing tier 1", () => {
    const demands = calculateElectricityDemands({
      population: 500,
      housingTier: 1,
    });

    expect(demands).toEqual([{ product: "Electricity", demand: 550 }]);
  });

  it("should calculate demands for housing tier 2", () => {
    const demands = calculateElectricityDemands({
      population: 500,
      housingTier: 2,
    });

    expect(demands).toEqual([{ product: "Electricity", demand: 605 }]);
  });

  it("should calculate demands for housing tier 3", () => {
    const demands = calculateElectricityDemands({
      population: 500,
      housingTier: 3,
    });

    expect(demands).toEqual([{ product: "Electricity", demand: 660 }]);
  });

  it("should calculate demands for housing tier 4", () => {
    const demands = calculateElectricityDemands({
      population: 500,
      housingTier: 4,
    });

    expect(demands).toEqual([{ product: "Electricity", demand: 770 }]);
  });
});

describe("calculateUnity", () => {
  it("should return zero unity with no demands", () => {
    const unity = calculateUnity({ population: 500, housingTier: 1 }, []);

    expect(unity).toEqual({
      total: 1,
      edicts: 0,
      food: 1,
      amenities: 0,
      infrastructure: 0,
      medicine: 0,
      square: 0,
    });
  });

  it("should calculate infrastructure unity from water and electricity", () => {
    const unity = calculateUnity({ population: 500, housingTier: 1 }, [
      { product: "Water", demand: 23.5 },
      { product: "Electricity", demand: 550 },
    ]);

    expect(unity).toEqual({
      total: 3.2,
      edicts: 0,
      food: 1,
      amenities: 0,
      infrastructure: 2.2,
      medicine: 0,
      square: 0,
    });
  });

  it("should calculate food unity from supplied food types", () => {
    const unity = calculateUnity({ population: 500, housingTier: 1 }, [
      { product: "Potato", demand: 21 },
      { product: "Meat", demand: 13.5 },
    ]);

    expect(unity).toEqual({
      total: 1.55,
      edicts: 0,
      food: 1.55,
      amenities: 0,
      infrastructure: 0,
      medicine: 0,
      square: 0,
    });
  });

  it("should calculate amenity unity", () => {
    const unity = calculateUnity({ population: 500, housingTier: 1 }, [
      { product: "HouseholdGoods", demand: 10 },
      { product: "HouseholdAppliances", demand: 7 },
    ]);

    expect(unity).toEqual({
      total: 3.8,
      edicts: 0,
      food: 1,
      amenities: 2.8,
      infrastructure: 0,
      medicine: 0,
      square: 0,
    });
  });

  it("should apply housing tier 2 unity factor when water and electricity are provided", () => {
    const unity = calculateUnity({ population: 500, housingTier: 2 }, [
      { product: "Water", demand: 24.68 },
      { product: "Electricity", demand: 605 },
    ]);

    expect(unity.edicts).toBe(0);
    expect(unity.food).toBe(1.5);
    expect(unity.amenities).toBe(0);
    expect(unity.infrastructure).toBeCloseTo(3.3, 10);
    expect(unity.total).toBeCloseTo(4.8, 10);
  });

  it("should not apply housing tier 2 unity factor without water", () => {
    const unity = calculateUnity({ population: 500, housingTier: 2 }, [
      { product: "Electricity", demand: 605 },
    ]);

    expect(unity).toEqual({
      total: 2.2,
      edicts: 0,
      food: 1,
      amenities: 0,
      infrastructure: 1.2,
      medicine: 0,
      square: 0,
    });
  });

  it("should include edict unity amounts", () => {
    const unity = calculateUnity(
      {
        population: 500,
        housingTier: 1,
        activeEdicts: { PlentyOfFood: 2 },
      },
      [],
    );

    expect(unity).toEqual({
      total: 3,
      edicts: 2,
      food: 1,
      amenities: 0,
      infrastructure: 0,
      medicine: 0,
      square: 0,
    });
  });

  it("should apply edict unity factor to amenities", () => {
    const unity = calculateUnity(
      {
        population: 500,
        housingTier: 1,
        activeEdicts: { MoreHouseholdGoods: 2 },
      },
      [{ product: "HouseholdGoods", demand: 10 }],
    );

    expect(unity.amenities).toBeCloseTo(1.4 * 1.2 * 1.2, 5);
  });

  it("should not count food unity for unsupplied food", () => {
    const unity = calculateUnity({ population: 500, housingTier: 1 }, [
      { product: "Potato", demand: 0 },
    ]);

    expect(unity.food).toBe(1);
  });

  it("should add +1 unity from square connection", () => {
    const unity = calculateUnity(
      { population: 500, housingTier: 1, hasSquare: true },
      [],
    );

    expect(unity.square).toBe(1);
    expect(unity.total).toBe(2);
  });

  it("should not multiply square unity by housing tier factor", () => {
    const unity = calculateUnity(
      { population: 500, housingTier: 2, hasSquare: true },
      [
        { product: "Water", demand: 24.68 },
        { product: "Electricity", demand: 605 },
      ],
    );

    expect(unity.square).toBe(1);
  });
});

describe("calculateHealth", () => {
  it("should return zero health with no food", () => {
    const { health } = calculateSettlementDemands({
      population: 500,
      housingTier: 1,
    });

    expect(health).toEqual({ total: 6, food: -4, water: 10, medicine: 0 });
  });

  it("should return zero food health with one food category", () => {
    const { health } = calculateSettlementDemands({
      population: 500,
      housingTier: 1,
      suppliedFoodTypes: ["Potato"],
    });

    expect(health).toEqual({ total: 10, food: 0, water: 10, medicine: 0 });
  });

  it("should return food health based on number of food categories", () => {
    const { health } = calculateSettlementDemands({
      population: 500,
      housingTier: 1,
      suppliedFoodTypes: ["Potato", "Meat", "Vegetables"],
    });

    expect(health).toEqual({ total: 18, food: 8, water: 10, medicine: 0 });
  });

  it("should not count multiple foods from the same category twice", () => {
    const { health } = calculateSettlementDemands({
      population: 500,
      housingTier: 1,
      suppliedFoodTypes: ["Potato", "Corn"],
    });

    expect(health).toEqual({ total: 10, food: 0, water: 10, medicine: 0 });
  });

  it("should give 10 water health when water is supplied", () => {
    const { health } = calculateSettlementDemands({
      population: 500,
      housingTier: 1,
    });

    expect(health.water).toBe(10);
  });

  it("should add medicine health from Medical Supplies I", () => {
    const { health } = calculateSettlementDemands({
      population: 500,
      housingTier: 1,
      suppliedMedicalSupply: "MedicalSupplies",
    });

    expect(health.medicine).toBe(15);
  });

  it("should add medicine health from Medical Supplies II", () => {
    const { health } = calculateSettlementDemands({
      population: 500,
      housingTier: 1,
      suppliedMedicalSupply: "MedicalSupplies2",
    });

    expect(health.medicine).toBe(20);
  });

  it("should add medicine health from Medical Supplies III", () => {
    const { health } = calculateSettlementDemands({
      population: 500,
      housingTier: 1,
      suppliedMedicalSupply: "MedicalSupplies3",
    });

    expect(health.medicine).toBe(25);
  });
});

describe("medical supply demands", () => {
  it("should not have medical supply demand when none supplied", () => {
    const { medicalSupply } = calculateSettlementDemands({
      population: 500,
      housingTier: 1,
    });

    expect(medicalSupply).toEqual([]);
  });

  it("should calculate medical supply demand based on population", () => {
    const { medicalSupply } = calculateSettlementDemands({
      population: 1000,
      housingTier: 1,
      suppliedMedicalSupply: "MedicalSupplies",
    });

    expect(medicalSupply).toEqual([
      { product: "MedicalSupplies", demand: 5.4 },
    ]);
  });

  it("should calculate demand for Medical Supplies II", () => {
    const { medicalSupply } = calculateSettlementDemands({
      population: 2000,
      housingTier: 1,
      suppliedMedicalSupply: "MedicalSupplies2",
    });

    expect(medicalSupply).toEqual([
      { product: "MedicalSupplies2", demand: 10.8 },
    ]);
  });

  it("should add unity from medical supplies", () => {
    const { unity } = calculateSettlementDemands({
      population: 500,
      housingTier: 1,
      suppliedMedicalSupply: "MedicalSupplies",
    });

    expect(unity.medicine).toBe(0.6);
  });

  it("should add higher unity from Medical Supplies III", () => {
    const { unity } = calculateSettlementDemands({
      population: 500,
      housingTier: 1,
      suppliedMedicalSupply: "MedicalSupplies3",
    });

    expect(unity.medicine).toBe(1.2);
  });
});
