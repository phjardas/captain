import { type Reducer } from "react";
import { CalculatorInput, calculate } from "../game/calculator.js";
import { getRecipe } from "../game/game.js";
import type {
  AddRecipeAction,
  ProductionPlan,
  ProductionPlanAction,
  SetRecipeQuantityAction,
} from "./types.js";

export const reducer: Reducer<ProductionPlan, ProductionPlanAction> = (
  state,
  action
) => {
  switch (action.type) {
    case "add-recipe":
      return applyInput(addRecipe)(state, action);
    case "set-recipe-quantity":
      return applyInput(setRecipeQuantity)(state, action);
    default:
      throw new Error(`Invalid action: ${(action as any).type}`);
  }
};

function applyInput<TAction extends ProductionPlanAction>(
  applyer: (input: CalculatorInput, action: TAction) => CalculatorInput
): Reducer<ProductionPlan, ProductionPlanAction> {
  return (state, action) => {
    try {
      const input = applyer(state.input, action as TAction);

      try {
        const output = input.recipes.length ? calculate(input) : undefined;
        return { ...state, input, output, error: undefined };
      } catch (error: any) {
        return { ...state, input, error };
      }
    } catch (error: any) {
      return { ...state, error };
    }
  };
}

function addRecipe(
  input: CalculatorInput,
  action: AddRecipeAction
): CalculatorInput {
  getRecipe(action.recipe);

  return {
    ...input,
    recipes: [
      ...input.recipes,
      { recipe: action.recipe, quantity: action.quantity },
    ],
  };
}

function setRecipeQuantity(
  input: CalculatorInput,
  action: SetRecipeQuantityAction
): CalculatorInput {
  return {
    ...input,
    recipes:
      action.quantity <= 0
        ? input.recipes.filter((_, i) => i !== action.index)
        : input.recipes.map((recipe, index) =>
            index === action.index
              ? { ...recipe, quantity: action.quantity }
              : recipe
          ),
  };
}
