import { Box, Button, Toolbar, Typography } from "@mui/material";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import StoredPlansMenu from "./StoredPlansMenu.js";
import { useAuth } from "./auth/context.js";
import { firebase } from "./firebase.js";

export default function MainMenu() {
  const auth = useAuth();

  return (
    <Toolbar>
      <Typography variant="h5">Industry Planner</Typography>
      <Box sx={{ ml: "auto", display: "flex", gap: 1 }}>
        {auth.state === "ready" &&
          (auth.data.user ? (
            <>
              <StoredPlansMenu />
              <Button
                color="inherit"
                onClick={() => signOut(getAuth(firebase))}
              >
                Sign out
              </Button>
            </>
          ) : (
            <Button
              color="inherit"
              onClick={() =>
                signInWithPopup(getAuth(firebase), new GoogleAuthProvider())
              }
            >
              Sign in
            </Button>
          ))}
      </Box>
    </Toolbar>
  );
}
