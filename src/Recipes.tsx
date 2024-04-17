import { Add as AddIcon, Remove as RemoveIcon } from "@mui/icons-material";
import {
  Alert,
  Box,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import AddRecipeButton from "./AddRecipeButton.js";
import { useProductionPlan, useProductionPlanDispatch } from "./context.js";
import { getRecipe } from "./game/game.js";

export default function Recipes() {
  const {
    input: { recipes },
  } = useProductionPlan();
  const dispatch = useProductionPlanDispatch();

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography variant="h6">Recipes</Typography>
      {recipes.length > 0 ? (
        <List>
          {recipes.map((recipe, i) => (
            <ListItem key={i} disableGutters>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <IconButton
                    edge="start"
                    size="small"
                    onClick={() =>
                      dispatch({
                        type: "set-recipe-quantity",
                        index: i,
                        quantity: recipe.quantity - 1,
                      })
                    }
                    disabled={recipe.quantity < 1}
                  >
                    <RemoveIcon />
                  </IconButton>
                  <Typography component="span">{recipe.quantity}</Typography>
                  <IconButton
                    edge="end"
                    size="small"
                    onClick={() =>
                      dispatch({
                        type: "set-recipe-quantity",
                        index: i,
                        quantity: recipe.quantity + 1,
                      })
                    }
                  >
                    <AddIcon />
                  </IconButton>
                </Box>
                <ListItemText
                  primary={getRecipe(recipe.recipe).name}
                  primaryTypographyProps={{ whiteSpace: "nowrap" }}
                />
              </Box>
            </ListItem>
          ))}
        </List>
      ) : (
        <Alert severity="info">Select a recipe to start.</Alert>
      )}
      <AddRecipeButton />
    </Box>
  );
}
