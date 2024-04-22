import { onSnapshot } from "firebase/firestore";
import { useEffect, useState, type ReactNode } from "react";
import { DataState } from "../data.js";
import { Context, useStorageCollection } from "./context.js";
import type { Storage, StoredPlan } from "./types.js";

export default function StorageProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<DataState<Storage | undefined>>({
    state: "loading",
  });
  const collection = useStorageCollection();

  useEffect(() => {
    if (collection) {
      return onSnapshot(collection, (snapshot) =>
        setState({
          state: "ready",
          data: {
            plans: snapshot.docs.map(
              (doc) => ({ ...doc.data(), id: doc.id }) as StoredPlan
            ),
          },
        })
      );
    }

    setState({ state: "ready", data: undefined });
  }, [collection]);

  return <Context.Provider value={state}>{children}</Context.Provider>;
}
