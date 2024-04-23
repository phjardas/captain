import type { CalculatorInput, CalculatorOutput } from "../game/calculator.js";
import type { Product } from "../game/types.js";

export type ProductionPlan = {
  id: string;
  input: CalculatorInput;
  mainProduct?: Product;
  output?: CalculatorOutput;
  error?: Error;
};

export type AddRecipeAction = {
  type: "add-recipe";
  recipe: string;
  quantity: number;
};

export type SetRecipeQuantityAction = {
  type: "set-recipe-quantity";
  index: number;
  quantity: number;
};

export type ResetPlanAction = {
  type: "reset-plan";
};

export type ReplacePlanAction = {
  type: "replace-plan";
  id: string;
  input: CalculatorInput;
};

export type ProductionPlanAction =
  | AddRecipeAction
  | SetRecipeQuantityAction
  | ResetPlanAction
  | ReplacePlanAction;
