import {
  createContext,
  useContext,
  type Dispatch,
  type ReactNode,
} from "react";
import type { ProductionPlan, ProductionPlanAction } from "./state/types.js";

export type Context = {
  plan: ProductionPlan;
  dispatch: Dispatch<ProductionPlanAction>;
};

const Context = createContext<Context | undefined>(undefined);

export default function ProductionPlanContext({
  plan,
  dispatch,
  children,
}: {
  plan: ProductionPlan;
  dispatch: Dispatch<ProductionPlanAction>;
  children: ReactNode;
}) {
  return (
    <Context.Provider value={{ plan, dispatch }}>{children}</Context.Provider>
  );
}

function useRequiredContext(): Context {
  const context = useContext(Context);
  if (!context) throw new Error("Missing context");
  return context;
}

export function useProductionPlan(): ProductionPlan {
  return useRequiredContext().plan;
}

export function useProductionPlanDispatch(): Dispatch<ProductionPlanAction> {
  return useRequiredContext().dispatch;
}
