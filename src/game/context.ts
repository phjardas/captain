import { createContext, useContext } from "react";
import type { GameData } from "./types.js";

export const Context = createContext<GameData | undefined>(undefined);

export function useGame(): GameData {
  const context = useContext(Context);
  if (!context) throw new Error("Game context not found");
  return context;
}
