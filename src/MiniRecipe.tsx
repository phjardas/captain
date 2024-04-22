import {
  Add as AddIcon,
  ArrowForward as ArrowForwardIcon,
} from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { Fragment } from "react/jsx-runtime";
import ProductIcon from "./ProductIcon.js";
import ProductQuantity from "./ProductQuantity.js";
import { getProduct } from "./game/game.js";
import type { Production, ProductQuantity as Quantity } from "./game/types.js";

export default function MiniRecipe({ recipe }: { recipe: Production }) {
  return (
    <Box
      component="span"
      sx={{ display: "inline-flex", alignItems: "baseline", gap: 1 }}
    >
      <Products products={recipe.inputs} type="input" />
      <ArrowForwardIcon fontSize="inherit" />
      <Products products={recipe.outputs} type="output" />
    </Box>
  );
}

function Products({
  products,
  type,
}: {
  products: ReadonlyArray<Quantity>;
  type: "input" | "output";
}) {
  return (
    <Box
      component="span"
      sx={{ display: "inline-flex", alignItems: "baseline", gap: 0.5 }}
    >
      {products
        .filter(({ product: productId }) => {
          const product = getProduct(productId);
          return (
            product.type === "countable" ||
            product.type === "fluid" ||
            product.type === "loose" ||
            product.type == "molten" ||
            product.type == "pollution" ||
            product.type == "mech" ||
            (type === "output" &&
              (product.type === "electricity" ||
                product.type === "maintenance"))
          );
        })
        .map(({ product, quantity }, index) => (
          <Fragment key={product}>
            {index > 0 && <AddIcon fontSize="inherit" />}
            <Box
              component="span"
              sx={{ display: "inline-flex", alignItems: "baseline", gap: 0.5 }}
            >
              <Typography component="span">
                <ProductQuantity
                  product={product}
                  quantity={quantity}
                  hideName
                />
              </Typography>
              <ProductIcon productId={product} size={16} />
            </Box>
          </Fragment>
        ))}
    </Box>
  );
}
