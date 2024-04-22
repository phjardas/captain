import { createContext, useContext } from "react";
import type { Authentication } from "./types.js";

export const AuthenticationContext = createContext<Authentication | undefined>(
  undefined
);

export function useAuth(): Authentication {
  return useContext(AuthenticationContext) ?? { state: "loading" };
}
