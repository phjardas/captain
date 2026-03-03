import { AppBar, Box, Container, Toolbar } from "@mui/material";
import { createFileRoute } from "@tanstack/react-router";
import ProductionPlanContext from "../context.js";
import MainMenu from "../MainMenu.js";
import Recipes from "../Recipes.js";
import Result from "../Result.js";
import { useProductionPlan } from "../state/index.js";
import ThemeColorChooser from "../theme/color-chooser.js";

export const Route = createFileRoute("/production")({
  component: RouteComponent,
});

function RouteComponent() {
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
