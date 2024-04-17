import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import { getProduct } from "./game/game.js";
import type { ProductQuantity } from "./game/types.js";

export default function Outputs({
  outputs,
}: {
  outputs: ReadonlyArray<ProductQuantity>;
}) {
  return (
    <Box>
      <Typography variant="h6">Outputs</Typography>
      <List>
        {outputs.map((product, i) => (
          <ListItem key={i} disableGutters>
            <ListItemText
              primary={`${product.quantity}x ${getProduct(product.product).name}`}
              primaryTypographyProps={{ whiteSpace: "nowrap" }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
