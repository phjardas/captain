import {
  Card,
  CardHeader,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { getProduct } from "./game/game.js";
import type { ProductQuantity } from "./game/types.js";

export default function Outputs({
  outputs,
}: {
  outputs: ReadonlyArray<ProductQuantity>;
}) {
  return (
    <Card>
      <CardHeader title="Outputs" />
      <List>
        {outputs.map(({ product, quantity }, i) => (
          <ListItem key={i}>
            <ListItemIcon>
              <img
                src={`/assets/${getProduct(product).icon}.png`}
                width={32}
                height={32}
              />
            </ListItemIcon>
            <ListItemText
              primary={`${quantity}x ${getProduct(product).name}`}
            />
          </ListItem>
        ))}
      </List>
    </Card>
  );
}
