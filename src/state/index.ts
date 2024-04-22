import { useReducer, type Dispatch } from "react";
import { reducer } from "./reducer.js";
import type { ProductionPlan, ProductionPlanAction } from "./types.js";
import { createInitialState } from "./utils.js";

export function useProductionPlan(): [
  ProductionPlan,
  Dispatch<ProductionPlanAction>,
] {
  return useReducer(reducer, undefined, createInitialState);
}
