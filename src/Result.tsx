import { Alert, Box } from "@mui/material";
import BuildCost from "./BuildCost.js";
import Inputs from "./Inputs.js";
import Maintenance from "./Maintenance.js";
import Outputs from "./Outputs.js";
import { useProductionPlan } from "./context.js";

export default function Result() {
  const { output, error } = useProductionPlan();

  return (
    <>
      {error && <Alert severity="error">{error.message}</Alert>}
      {output && (
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: ["1fr", "1fr 1fr", "1fr 1fr 1fr 1fr"],
            gap: 1,
          }}
        >
          <Inputs inputs={output.production.inputs} />
          <Outputs outputs={output.production.outputs} />
          <BuildCost output={output} />
          <Maintenance output={output} />
        </Box>
      )}
    </>
  );
}
