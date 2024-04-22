import { useReducer, type Dispatch } from "react";
import { useProductionPlanReducer } from "./reducer.js";
import type { ProductionPlan, ProductionPlanAction } from "./types.js";
import { createInitialState } from "./utils.js";

export function useProductionPlan(): [
  ProductionPlan,
  Dispatch<ProductionPlanAction>,
] {
  const reducer = useProductionPlanReducer();
  return useReducer(reducer, undefined, createInitialState);
}
