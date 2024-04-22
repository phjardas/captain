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
import type { ProductQuantity as Quantity } from "./game/types.js";

export default function Outputs({
  outputs,
}: {
  outputs: ReadonlyArray<Quantity>;
}) {
  return (
    <Card>
      <CardHeader title="Outputs" />
      <List>
        {outputs.map(({ product, quantity }, i) => (
          <ListItem key={i}>
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
