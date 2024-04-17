import { Card, CardHeader, List, ListItem, ListItemText } from "@mui/material";
import { CalculatorOutput } from "./game/calculator.js";

export default function Statistics({
  output: { electricityProduction, computingProduction, workers },
}: {
  output: CalculatorOutput;
}) {
  return (
    <Card>
      <CardHeader title="Statistics" />
      <List>
        {workers > 0 && (
          <ListItem key="workers">
            <ListItemText primary={`Workers: ${workers}`} />
          </ListItem>
        )}
        {electricityProduction !== 0 && (
          <ListItem key="electricity">
            <ListItemText
              primary={`Electricity ${electricityProduction > 0 ? "production" : "consumption"}: ${Math.abs(electricityProduction)} kW`}
            />
          </ListItem>
        )}
        {computingProduction !== 0 && (
          <ListItem key="computing">
            <ListItemText
              primary={`Computing ${computingProduction > 0 ? "production" : "consumption"}: ${Math.abs(computingProduction)} TFLOPS`}
            />
          </ListItem>
        )}
      </List>
    </Card>
  );
}
