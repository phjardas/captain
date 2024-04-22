import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState, type ReactNode } from "react";
import { firebase } from "../firebase.js";
import { AuthenticationContext } from "./context.js";
import { Authentication } from "./types.js";

export default function AuthenticationProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [context, setContext] = useState<Authentication>({ state: "loading" });

  useEffect(() => {
    onAuthStateChanged(getAuth(firebase), (user) => {
      setContext({ state: "ready", data: { user: user ?? undefined } });
    });
  }, []);

  return (
    <AuthenticationContext.Provider value={context}>
      {children}
    </AuthenticationContext.Provider>
  );
}
