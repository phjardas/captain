import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import { OutputRecipe } from "./game/calculator.js";

export default function Machines({
  recipes,
}: {
  recipes: ReadonlyArray<OutputRecipe>;
}) {
  return (
    <Box>
      <Typography variant="h6">Machines</Typography>
      <List>
        {recipes.map(({ recipe, machine, quantity }, i) => (
          <ListItem key={i} disableGutters>
            <ListItemText
              primary={`${quantity}x ${machine.name}: ${recipe.name}`}
              primaryTypographyProps={{ whiteSpace: "nowrap" }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
