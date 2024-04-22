import { AppBar, Box, Container, Toolbar } from "@mui/material";
import MainMenu from "./MainMenu.js";
import Recipes from "./Recipes.js";
import Result from "./Result.js";
import AuthenticationProvider from "./auth/provider.js";
import ProductionPlanContext from "./context.js";
import GameProvider from "./game/provider.js";
import { useProductionPlan } from "./state/index.js";
import StorageProvider from "./storage/provider.js";
import ThemeProvider from "./theme.js";

export default function App() {
  return (
    <ThemeProvider>
      <AuthenticationProvider>
        <GameProvider>
          <StorageProvider>
            <Main />
          </StorageProvider>
        </GameProvider>
      </AuthenticationProvider>
    </ThemeProvider>
  );
}

function Main() {
  const [plan, dispatch] = useProductionPlan();

  return (
    <ProductionPlanContext plan={plan} dispatch={dispatch}>
      <AppBar position="fixed">
        <MainMenu />
      </AppBar>
      <Toolbar />
      <Container sx={{ py: 2 }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <Recipes />
          <Result />
        </Box>
      </Container>
    </ProductionPlanContext>
  );
}
