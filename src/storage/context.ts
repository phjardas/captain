import { collection, deleteDoc, doc, setDoc } from "firebase/firestore";
import { createContext, useCallback, useContext, useMemo } from "react";
import { useAuth } from "../auth/context.js";
import { type DataState } from "../data.js";
import { firestore } from "../firebase.js";
import type { Storage, StoredPlan, StoredPlanInput } from "./types.js";

export const Context = createContext<
  DataState<Storage | undefined> | undefined
>(undefined);

export function useStorage(): DataState<Storage | undefined> {
  const context = useContext(Context);
  if (!context) throw new Error("Missing StorageProvider");
  return context;
}

export function useSaveProductionPlan(): (
  input: StoredPlanInput
) => Promise<StoredPlan> {
  const collection = useStorageCollection();

  return useCallback(
    async (input) => {
      if (!collection) throw new Error("not ready");
      const plan: StoredPlan = {
        ...input,
        createdAt: input.createdAt ?? Date.now(),
        updatedAt: Date.now(),
      };
      await setDoc(doc(collection, plan.id), plan);
      return plan;
    },
    [collection]
  );
}

export function useDeleteProductionPlan(): (id: string) => Promise<void> {
  const collection = useStorageCollection();

  return useCallback(
    async (id) => {
      if (!collection) throw new Error("not ready");
      await deleteDoc(doc(collection, id));
    },
    [collection]
  );
}

export function useStorageCollection() {
  const auth = useAuth();

  return useMemo(
    () =>
      auth.state === "ready" && auth.data.user
        ? collection(firestore, `users/${auth.data.user.uid}/plans`)
        : undefined,
    [auth]
  );
}
