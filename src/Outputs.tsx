import { Card, CardHeader, List } from "@mui/material";
import ProductListItem from "./ProductListItem.js";

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
            <ProductListItem product={product} quantity={quantity} key={i} />
          ))}
      </List>
    </Card>
  );
}
