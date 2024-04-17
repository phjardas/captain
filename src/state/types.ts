import type { CalculatorInput, CalculatorOutput } from "../game/calculator.js";

export type ProductionPlan = {
  input: CalculatorInput;
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

export type ProductionPlanAction = AddRecipeAction | SetRecipeQuantityAction;
