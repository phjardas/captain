import {
  Card,
  CardHeader,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import ProductIcon from "./ProductIcon.js";
import ProductQuantity from "./ProductQuantity.js";
import { type CalculatorOutput } from "./game/calculator.js";

export default function BuildCost({ output }: { output: CalculatorOutput }) {
  return (
    <Card>
      <CardHeader title="Build cost" />
      <List>
        {output.buildCosts.map(({ product, quantity }) => (
          <ListItem key={product}>
            <ListItemIcon>
              <ProductIcon productId={product} />
            </ListItemIcon>
            <ListItemText
              primary={
                <ProductQuantity product={product} quantity={quantity} />
              }
            />
          </ListItem>
        ))}
      </List>
    </Card>
  );
}
