import type { ProductionPlan } from "./types.js";

export function createInitialState(): ProductionPlan {
  return { id: createId(), input: { recipes: [] } };
}

function createId(): string {
  return Math.random().toString(36);
}
