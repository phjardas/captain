import { useContext } from "react";
import { Context } from "./context.js";
import type { Storage } from "./types.js";

export function useStorage(): Storage {
  const context = useContext(Context);
  if (!context) throw new Error("Missing StorageProvider");
  return context;
}
