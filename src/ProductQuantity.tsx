import { getProduct } from "./game/game.js";
import type { Product, ProductQuantity as Quantity } from "./game/types.js";

export default function ProductQuantity({
  product: productId,
  quantity,
  hideName,
}: Quantity & { hideName?: boolean }) {
  const product = getProduct(productId);

  return (
    <>
      {getQuantity(product, quantity)}
      {!hideName && ` ${product.name}`}
    </>
  );
}

function getQuantity(product: Product, quantity: number): string {
  switch (product.type) {
    case "electricity":
    case "mech":
      if (quantity >= 1000000) {
        return (
          (quantity / 1000000).toLocaleString(undefined, {
            maximumFractionDigits: 3,
          }) + " GW"
        );
      }
      if (quantity >= 1000) {
        return (
          (quantity / 1000).toLocaleString(undefined, {
            maximumFractionDigits: 3,
          }) + " MW"
        );
      }
      return `${quantity.toLocaleString()} kW`;

    default:
      return `${quantity.toLocaleString()}`;
  }
}
