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

export default function Inputs({
  inputs,
}: {
  inputs: ReadonlyArray<Quantity>;
}) {
  return (
    <Card>
      <CardHeader title="Inputs" />
      <List>
        {inputs.map(({ product, quantity }, i) => (
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
