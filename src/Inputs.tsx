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
import { useGame } from "./game/context.js";
import { getProduct } from "./game/game.js";

export default function Inputs({ inputs }: { inputs: Record<string, number> }) {
  const game = useGame();

  return (
    <Card>
      <CardHeader title="Inputs" />
      <List>
        {Object.entries(inputs)
          .filter(([p]) => {
            const product = getProduct(game, p);
            return !(
              product.type === "computing" ||
              product.type === "electricity" ||
              product.type === "maintenance" ||
              product.type === "worker" ||
              product.type === "unity"
            );
          })
          .sort((a, b) => b[1] - a[1])
          .map(([product, quantity], i) => (
            <ListItem key={i}>
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
