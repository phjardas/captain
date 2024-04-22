import { getProduct } from "./game/game.js";
import type { Product } from "./game/types.js";

type ProductId = { product: Product } | { productId: string };

export default function ProductIcon({
  size = 32,
  ...props
}: ProductId & { size?: number }) {
  const product =
    "product" in props ? props.product : getProduct(props.productId);
  return <img src={`/assets/${product.icon}.png`} width={size} height={size} />;
}
