import { AppBar, Box, Container, Toolbar } from "@mui/material";
import MainMenu from "./MainMenu.js";
import Recipes from "./Recipes.js";
import Result from "./Result.js";
import AuthenticationProvider from "./auth/provider.js";
import ProductionPlanContext from "./context.js";
import GameProvider from "./game/provider.js";
import { useProductionPlan } from "./state/index.js";
import StorageProvider from "./storage/provider.js";
import ThemeColorChooser from "./theme/color-chooser.js";
import ThemeColorProvider from "./theme/color-provider.js";
import ThemeProvider from "./theme/mui.js";

export default function App() {
  return (
    <ThemeColorProvider>
      <ThemeProvider>
        <AuthenticationProvider>
          <GameProvider>
            <StorageProvider>
              <Main />
            </StorageProvider>
          </GameProvider>
        </AuthenticationProvider>
      </ThemeProvider>
    </ThemeColorProvider>
  );
}

function Main() {
  const [plan, dispatch] = useProductionPlan();

  return (
    <ProductionPlanContext plan={plan} dispatch={dispatch}>
      <ThemeColorChooser
        key={plan.mainProduct?.icon}
        imageData={plan.mainProduct?.icon}
      />
      <AppBar position="fixed" elevation={0}>
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
