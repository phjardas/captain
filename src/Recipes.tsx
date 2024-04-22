import {
  Add as AddIcon,
  Clear,
  Remove as RemoveIcon,
} from "@mui/icons-material";
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import AddRecipeButton from "./AddRecipeButton.js";
import MachineIcon from "./MachineIcon.js";
import MiniRecipe from "./MiniRecipe.js";
import SaveRecipeButton from "./SaveRecipeButton.js";
import { useProductionPlan, useProductionPlanDispatch } from "./context.js";
import { useGame } from "./game/context.js";
import { getMachine, getRecipe } from "./game/game.js";

export default function Recipes() {
  const game = useGame();
  const {
    input: { recipes },
  } = useProductionPlan();
  const dispatch = useProductionPlanDispatch();

  return (
    <Card>
      <CardHeader title="Recipes" />
      {recipes.length > 0 ? (
        <List>
          {recipes.map(({ recipe, quantity }, i) => (
            <ListItem key={i}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <IconButton
                    edge="start"
                    size="small"
                    onClick={() =>
                      dispatch({
                        type: "set-recipe-quantity",
                        index: i,
                        quantity: quantity - 1,
                      })
                    }
                    disabled={quantity < 1}
                  >
                    <RemoveIcon />
                  </IconButton>
                  <Typography component="span">{quantity}</Typography>
                  <IconButton
                    edge="end"
                    size="small"
                    onClick={() =>
                      dispatch({
                        type: "set-recipe-quantity",
                        index: i,
                        quantity: quantity + 1,
                      })
                    }
                  >
                    <AddIcon />
                  </IconButton>
                  <MachineIcon machine={getRecipe(game, recipe).machine} />
                  <ListItemText
                    primary={
                      getMachine(game, getRecipe(game, recipe).machine).name
                    }
                    secondary={<MiniRecipe recipe={getRecipe(game, recipe)} />}
                  />
                </Box>
              </Box>
            </ListItem>
          ))}
        </List>
      ) : (
        <CardContent>
          <Alert severity="info">Select a recipe to start.</Alert>
        </CardContent>
      )}
      <Box
        sx={{
          display: "flex",
          flexDirection: ["column", "row"],
          gap: 1,
          p: 1,
        }}
      >
        <AddRecipeButton />
        <SaveRecipeButton />
        {recipes.length > 0 && (
          <Button
            startIcon={<Clear />}
            onClick={() => dispatch({ type: "reset-plan" })}
          >
            Start over
          </Button>
        )}
      </Box>
    </Card>
  );
}
