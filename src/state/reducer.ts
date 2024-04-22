import { type Reducer } from "react";
import { CalculatorInput, calculate } from "../game/calculator.js";
import { getRecipe } from "../game/game.js";
import type {
  AddRecipeAction,
  ProductionPlan,
  ProductionPlanAction,
  ReplacePlanAction,
  SetRecipeQuantityAction,
} from "./types.js";
import { createInitialState } from "./utils.js";

export const reducer: Reducer<ProductionPlan, ProductionPlanAction> = (
  state,
  action
) => {
  switch (action.type) {
    case "add-recipe":
      return applyInput(addRecipe)(state, action);
    case "set-recipe-quantity":
      return applyInput(setRecipeQuantity)(state, action);
    case "reset-plan":
      return apply(resetPlan)(state, action);
    case "replace-plan":
      return apply(replacePlan)(state, action);
    default:
      throw new Error(`Invalid action: ${(action as any).type}`);
  }
};

function apply<TAction extends ProductionPlanAction>(
  applyer: (plan: ProductionPlan, action: TAction) => ProductionPlan
): Reducer<ProductionPlan, ProductionPlanAction> {
  return (state, action) => {
    try {
      const plan = applyer(state, action as TAction);

      try {
        const output = plan.input.recipes.length
          ? calculate(plan.input)
          : undefined;
        return { ...plan, output, error: undefined };
      } catch (error: any) {
        return { ...plan, error };
      }
    } catch (error: any) {
      return { ...state, error };
    }
  };
}

function applyInput<TAction extends ProductionPlanAction>(
  applyer: (input: CalculatorInput, action: TAction) => CalculatorInput
): Reducer<ProductionPlan, ProductionPlanAction> {
  return apply((state, action) => {
    const input = applyer(state.input, action as TAction);
    return { ...state, input };
  });
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

function resetPlan(): ProductionPlan {
  return createInitialState();
}

function replacePlan(
  _: ProductionPlan,
  action: ReplacePlanAction
): ProductionPlan {
  return { id: action.id, input: action.input };
}
