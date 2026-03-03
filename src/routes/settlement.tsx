import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import { createFileRoute } from "@tanstack/react-router";
import SettlementCalculator from "../settlement/SettlementCalculator.js";

export const Route = createFileRoute("/settlement")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <AppBar position="fixed" elevation={0}>
        <Toolbar>
          <Typography variant="h5">Industry Planner</Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Container sx={{ py: 2 }}>
        <SettlementCalculator />
      </Container>
    </>
  );
}
