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

export default function Outputs({
  outputs,
}: {
  outputs: Record<string, number>;
}) {
  return (
    <Card>
      <CardHeader title="Outputs" />
      <List>
        {Object.entries(outputs)
          .sort((a, b) => b[1] - a[1])
          .map(([product, quantity], i) => (
            <ListItem key={i}>
              <ListItemIcon>
                <ProductIcon product={product} />
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
