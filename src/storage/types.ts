import type { CalculatorInput } from "../game/calculator.js";
import type { Production } from "../game/types.js";

export type StoredPlanData = {
  label?: string;
  input: CalculatorInput;
  production: Production;
};

export type StoredPlan = {
  id: string;
  createdAt: number;
  updatedAt: number;
} & StoredPlanData;

export type StoredPlanInput = {
  id: string;
  createdAt?: number;
} & StoredPlanData;

export type StorageData = {
  plans: ReadonlyArray<StoredPlan>;
};

export type StorageMethods = {
  savePlan(plan: StoredPlanInput): StoredPlan;
  deletePlan(id: string): void;
};

export type Storage = StorageData & StorageMethods;
