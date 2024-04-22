import {
  Add as AddIcon,
  ArrowForward as ArrowForwardIcon,
} from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { Fragment } from "react/jsx-runtime";
import ProductIcon from "./ProductIcon.js";
import type { Recipe } from "./game/types.js";

export default function MiniRecipe({ recipe }: { recipe: Recipe }) {
  return (
    <Box
      component="span"
      sx={{ display: "inline-flex", alignItems: "baseline", gap: 1 }}
    >
      <Box
        component="span"
        sx={{ display: "inline-flex", alignItems: "baseline", gap: 0.5 }}
      >
        {recipe.inputs.map((input, index) => (
          <Fragment key={input.product}>
            {index > 0 && <AddIcon fontSize="inherit" />}
            <Box
              component="span"
              sx={{ display: "inline-flex", alignItems: "baseline", gap: 0.5 }}
            >
              <Typography component="span">{input.quantity}</Typography>
              <ProductIcon productId={input.product} size={16} />
            </Box>
          </Fragment>
        ))}
      </Box>
      <ArrowForwardIcon fontSize="inherit" />
      <Box
        component="span"
        sx={{ display: "inline-flex", alignItems: "baseline", gap: 0.5 }}
      >
        {recipe.outputs.map((output, index) => (
          <Fragment key={output.product}>
            {index > 0 && <AddIcon fontSize="inherit" />}
            <Box
              component="span"
              sx={{ display: "inline-flex", alignItems: "baseline", gap: 0.5 }}
            >
              <Typography component="span">{output.quantity}</Typography>
              <ProductIcon productId={output.product} size={16} />
            </Box>
          </Fragment>
        ))}
      </Box>
    </Box>
  );
}
