import { useGame } from "./game/context.js";
import { getProduct } from "./game/game.js";
import type { Product } from "./game/types.js";

export default function ProductIcon({
  product,
  size = 32,
}: {
  product: string | Product;
  size?: number;
}) {
  const game = useGame();
  const { name, icon } = getProduct(game, product);

  return <img src={icon} width={size} height={size} title={name} />;
}
