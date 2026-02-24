import { Card, CardHeader, List } from "@mui/material";
import { useGame } from "./game/context.js";
import { getProduct } from "./game/game.js";
import ProductListItem from "./ProductListItem.js";

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
            <ProductListItem product={product} quantity={quantity} key={i} />
          ))}
      </List>
    </Card>
  );
}
