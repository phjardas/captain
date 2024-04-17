import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
import Recipes from "./Recipes.js";
import Result from "./Result.js";
import { ProductionPlanContext } from "./context.js";
import { useProductionPlan } from "./state/index.js";
import { ThemeProvider } from "./theme.js";

export default function App() {
  return (
    <ThemeProvider>
      <Main />
    </ThemeProvider>
  );
}

function Main() {
  const [plan, dispatch] = useProductionPlan();

  return (
    <ProductionPlanContext plan={plan} dispatch={dispatch}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5">Industry Planner</Typography>
        </Toolbar>
      </AppBar>
      <Container sx={{ py: 2 }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Recipes />
          <Result />
        </Box>
      </Container>
    </ProductionPlanContext>
  );
}
