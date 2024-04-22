import { Box, Toolbar, Typography } from "@mui/material";
import StoredPlansMenu from "./StoredPlansMenu.js";

export default function MainMenu() {
  return (
    <Toolbar>
      <Typography variant="h5">Industry Planner</Typography>
      <Box sx={{ ml: "auto", display: "flex", gap: 1 }}>
        <StoredPlansMenu />
      </Box>
    </Toolbar>
  );
}
