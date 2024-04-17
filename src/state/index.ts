import { useReducer, type Dispatch } from "react";
import { reducer } from "./reducer.js";
import type { ProductionPlan, ProductionPlanAction } from "./types.js";

export function useProductionPlan(): [
  ProductionPlan,
  Dispatch<ProductionPlanAction>,
] {
  return useReducer(reducer, undefined, createInitialState);
}

function createInitialState(): ProductionPlan {
  return { input: { recipes: [] } };
}
