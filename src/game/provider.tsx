import { Alert, LinearProgress } from "@mui/material";
import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useMemo, useState, type ReactNode } from "react";
import { DataReady, getErrors, isLoading, type DataState } from "../data.js";
import { firestore } from "../firebase.js";
import { Context } from "./context.js";
import type { GameData, Machine, Product, Recipe } from "./types.js";

export default function GameProvider({ children }: { children: ReactNode }) {
  const machines = useData<Machine>("machines");
  const products = useData<Product>("products");
  const recipes = useData<Recipe>("recipes");

  const state: DataState<GameData> = useMemo(() => {
    const errors = getErrors(machines, products, recipes);
    if (errors.length) return { state: "error", error: errors[0] };

    const loading = isLoading(machines, products, recipes);
    return loading
      ? { state: "loading" }
      : {
          state: "ready",
          data: {
            machines: (machines as DataReady<Record<string, Machine>>)
              .data as Record<string, Machine>,
            products: (products as DataReady<Record<string, Product>>)
              .data as Record<string, Product>,
            recipes: (recipes as DataReady<Record<string, Recipe>>)
              .data as Record<string, Recipe>,
          },
        };
  }, [machines, products, recipes]);

  if (state.state === "loading") return <LinearProgress />;
  if (state.state === "error")
    return <Alert severity="error">{state.error.message}</Alert>;
  return <Context.Provider value={state.data}>{children}</Context.Provider>;
}

function useData<T>(key: string): DataState<Record<string, T>> {
  const [state, setState] = useState<DataState<Record<string, T>>>({
    state: "loading",
  });

  useEffect(() => {
    const cleanups: Array<() => void> = [
      onSnapshot(collection(firestore, key), (snapshot) => {
        setState({
          state: "ready",
          data: Object.fromEntries(
            snapshot.docs.map((doc) => [
              doc.id,
              { ...doc.data(), id: doc.id } as T,
            ])
          ),
        });
      }),
    ];

    return () => cleanups.forEach((cleanup) => cleanup());
  }, [key]);

  return state;
}
