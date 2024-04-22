import { useCallback, useMemo, useState, type ReactNode } from "react";
import { Context } from "./context.js";
import type {
  Storage,
  StorageData,
  StoredPlan,
  StoredPlanInput,
} from "./types.js";

export function StorageProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState(loadState());

  const set = useCallback((state: StorageData) => {
    setState(state);
    saveState(state);
  }, []);

  const savePlan = useCallback(
    (input: StoredPlanInput) => {
      const plan: StoredPlan = {
        ...input,
        createdAt: input.createdAt ?? Date.now(),
        updatedAt: Date.now(),
      };

      set({
        ...state,
        plans: state.plans.some((p) => p.id === plan.id)
          ? state.plans.map((p) => (p.id === plan.id ? plan : p))
          : [...state.plans, plan],
      });

      return plan;
    },
    [state, set]
  );

  const deletePlan = useCallback(
    (id: string) => {
      set({
        ...state,
        plans: state.plans.filter((p) => p.id !== id),
      });
    },
    [state, set]
  );

  const context: Storage = useMemo(
    () => ({ ...state, savePlan, deletePlan }),
    [state, savePlan, deletePlan]
  );

  return <Context.Provider value={context}>{children}</Context.Provider>;
}

function loadState(): StorageData {
  const data = window.localStorage.getItem("coi:storage");
  if (typeof data === "string") return JSON.parse(data);
  return { plans: [] };
}

function saveState(state: StorageData) {
  window.localStorage.setItem("coi:storage", JSON.stringify(state));
}
