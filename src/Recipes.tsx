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
  CardActions,
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
import { getMachine, getRecipe } from "./game/game.js";

export default function Recipes() {
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
                  <MachineIcon machineId={getRecipe(recipe).machine} />
                  <ListItemText
                    primary={getMachine(getRecipe(recipe).machine).name}
                    secondary={<MiniRecipe recipe={getRecipe(recipe)} />}
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
      <CardActions>
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
      </CardActions>
    </Card>
  );
}
