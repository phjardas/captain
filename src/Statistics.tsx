import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import { CalculatorOutput } from "./game/calculator.js";

export default function Statistics({
  output: { electricityProduction, computingProduction, workers },
}: {
  output: CalculatorOutput;
}) {
  return (
    <Box>
      <Typography variant="h6">Statistics</Typography>
      <List>
        {workers > 0 && (
          <ListItem key="workers" disableGutters>
            <ListItemText primary={`Workers: ${workers}`} />
          </ListItem>
        )}
        {electricityProduction !== 0 && (
          <ListItem key="electricity" disableGutters>
            <ListItemText
              primary={`Electricity ${electricityProduction > 0 ? "production" : "consumption"}: ${Math.abs(electricityProduction)} kW`}
            />
          </ListItem>
        )}
        {computingProduction !== 0 && (
          <ListItem key="computing" disableGutters>
            <ListItemText
              primary={`Computing ${computingProduction > 0 ? "production" : "consumption"}: ${Math.abs(computingProduction)} TFLOPS`}
            />
          </ListItem>
        )}
      </List>
    </Box>
  );
}
