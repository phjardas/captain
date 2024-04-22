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
import { getProduct } from "./game/game.js";

export default function Maintenance({ output }: { output: CalculatorOutput }) {
  return (
    <Card>
      <CardHeader title="Maintenance" />
      <List>
        {output.production.inputs
          .filter((p) => {
            const product = getProduct(p.product);
            return (
              product.type === "computing" ||
              product.type === "electricity" ||
              product.type === "maintenance" ||
              product.type === "worker" ||
              product.type === "unity"
            );
          })
          .map(({ product, quantity }) => (
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
