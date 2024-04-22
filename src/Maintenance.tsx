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
import { useGame } from "./game/context.js";
import { getProduct } from "./game/game.js";

export default function Maintenance({ output }: { output: CalculatorOutput }) {
  const game = useGame();

  return (
    <Card>
      <CardHeader title="Maintenance" />
      <List>
        {Object.entries(output.production.inputs)
          .filter(([p]) => {
            const product = getProduct(game, p);
            return (
              product.type === "computing" ||
              product.type === "electricity" ||
              product.type === "maintenance" ||
              product.type === "worker" ||
              product.type === "unity"
            );
          })
          .map(([product, quantity]) => (
            <ListItem key={product}>
              <ListItemIcon>
                <ProductIcon product={product} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <ProductQuantity
                    product={product}
                    quantity={quantity}
                    hideName
                  />
                }
              />
            </ListItem>
          ))}
      </List>
    </Card>
  );
}
