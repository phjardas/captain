import { Alert, Box } from "@mui/material";
import Inputs from "./Inputs.js";
import Machines from "./Machines.js";
import Outputs from "./Outputs.js";
import Statistics from "./Statistics.js";
import { useProductionPlan } from "./context.js";

export default function Result() {
  const { output, error } = useProductionPlan();

  return (
    <>
      {error && <Alert severity="error">{error.message}</Alert>}
      {output && (
        <Box
          sx={{
            display: "flex",
            flexDirection: ["column", "column", "row"],
            gap: 3,
          }}
        >
          <Inputs inputs={output.inputs} />
          <Outputs outputs={output.outputs} />
          <Machines recipes={output.recipes} />
          <Statistics output={output} />
        </Box>
      )}
    </>
  );
}
