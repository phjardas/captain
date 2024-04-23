import { useCallback, type Reducer } from "react";
import {
  CalculatorOutput,
  calculate,
  type CalculatorInput,
} from "../game/calculator.js";
import { useGame } from "../game/context.js";
import { getProduct, getRecipe } from "../game/game.js";
import type { GameData, Product } from "../game/types.js";
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
        const mainProduct = output ? getMainProduct(game, output) : undefined;
        return { ...plan, output, mainProduct, error: undefined };
      } catch (error: any) {
        return { ...plan, error };
      }
    } catch (error: any) {
      return { ...state, error };
    }
  };
}

function getMainProduct(
  game: GameData,
  output: CalculatorOutput
): Product | undefined {
  const products = Object.entries(output.production.outputs)
    .sort((a, b) => b[1] - a[1])
    .map(([product]) => getProduct(game, product));

  if (!products.length) return;

  return (
    products.find(
      (p) =>
        ["fluid", "loose", "countable", "molten", "electricity"].includes(
          p.type
        ) && !["Exhaust", "Recyclables"].includes(p.id)
    ) ||
    products.find((p) => ["Maintenance"].includes(p.id)) ||
    products[0]
  );
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
