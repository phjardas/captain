import { AppBar, Box, Container } from "@mui/material";
import MainMenu from "./MainMenu.js";
import Recipes from "./Recipes.js";
import Result from "./Result.js";
import { ProductionPlanContext } from "./context.js";
import { useProductionPlan } from "./state/index.js";
import { StorageProvider } from "./storage/provider.js";
import { ThemeProvider } from "./theme.js";

export default function App() {
  return (
    <StorageProvider>
      <ThemeProvider>
        <Main />
      </ThemeProvider>
    </StorageProvider>
  );
}

function Main() {
  const [plan, dispatch] = useProductionPlan();

  return (
    <ProductionPlanContext plan={plan} dispatch={dispatch}>
      <AppBar position="static">
        <MainMenu />
      </AppBar>
      <Container sx={{ py: 2 }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <Recipes />
          <Result />
        </Box>
      </Container>
    </ProductionPlanContext>
  );
}
