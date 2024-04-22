import { createContext } from "react";
import type { Storage } from "./types.js";

export const Context = createContext<Storage | undefined>(undefined);
