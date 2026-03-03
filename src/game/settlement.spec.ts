import { describe, expect, it } from "vitest";
import {
  calculateElectricityDemands,
  calculateFoodDemands,
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
      { product: "Potato", demand: 8.652 },
      { product: "Corn", demand: 6.18 },
      { product: "Bread", demand: 4.12 },
      { product: "Tofu", demand: 11.124 },
      { product: "Vegetables", demand: 25.956 },
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
      { product: "Water", demand: 24.675 },
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
