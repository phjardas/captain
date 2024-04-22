import { useCallback, type Reducer } from "react";
import { calculate, type CalculatorInput } from "../game/calculator.js";
import { useGame } from "../game/context.js";
import { getRecipe } from "../game/game.js";
import type { GameData } from "../game/types.js";
import type {
  AddRecipeAction,
  ProductionPlan,
  ProductionPlanAction,
  ReplacePlanAction,
  SetRecipeQuantityAction,
} from "./types.js";
import { createInitialState } from "./utils.js";

export function useProductionPlanReducer(): Reducer<
  ProductionPlan,
  ProductionPlanAction
> {
  const game = useGame();

  return useCallback(
    (state, action) => {
      switch (action.type) {
        case "add-recipe":
          return applyInput(game, addRecipe)(state, action);
        case "set-recipe-quantity":
          return applyInput(game, setRecipeQuantity)(state, action);
        case "reset-plan":
          return apply(game, resetPlan)(state, action);
        case "replace-plan":
          return apply(game, replacePlan)(state, action);
        default:
          throw new Error(`Invalid action: ${(action as any).type}`);
      }
    },
    [game]
  );
}

function apply<TAction extends ProductionPlanAction>(
  game: GameData,
  applyer: (
    game: GameData,
    plan: ProductionPlan,
    action: TAction
  ) => ProductionPlan
): Reducer<ProductionPlan, ProductionPlanAction> {
  return (state, action) => {
    try {
      const plan = applyer(game, state, action as TAction);

      try {
        const output = plan.input.recipes.length
          ? calculate(game, plan.input)
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
  game: GameData,
  applyer: (
    game: GameData,
    input: CalculatorInput,
    action: TAction
  ) => CalculatorInput
): Reducer<ProductionPlan, ProductionPlanAction> {
  return apply(game, (game, state, action) => {
    const input = applyer(game, state.input, action as TAction);
    return { ...state, input };
  });
}

function addRecipe(
  game: GameData,
  input: CalculatorInput,
  action: AddRecipeAction
): CalculatorInput {
  getRecipe(game, action.recipe);

  return {
    ...input,
    recipes: [
      ...input.recipes,
      { recipe: action.recipe, quantity: action.quantity },
    ],
  };
}

function setRecipeQuantity(
  game: GameData,
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
  _: GameData,
  __: ProductionPlan,
  action: ReplacePlanAction
): ProductionPlan {
  return { id: action.id, input: action.input };
}
