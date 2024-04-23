import { Clear } from "@mui/icons-material";
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  List,
  ListItem,
  ListItemText,
  TextField,
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
    mainProduct,
  } = useProductionPlan();
  const dispatch = useProductionPlanDispatch();

  return (
    <Card>
      <CardHeader
        title={mainProduct ? `${mainProduct.name} production` : "Production"}
      />
      {recipes.length > 0 ? (
        <List>
          {recipes.map(({ recipe, quantity }, i) => (
            <ListItem key={i} sx={{ gap: 1 }}>
              <TextField
                size="small"
                value={quantity}
                onChange={(e) => {
                  const quantity = parseFloat(e.target.value);
                  if (!isNaN(quantity))
                    dispatch({
                      type: "set-recipe-quantity",
                      index: i,
                      quantity,
                    });
                }}
                inputProps={{
                  min: 0,
                  step: "any",
                  style: { textAlign: "right" },
                }}
                sx={{ width: "4.5rem" }}
              />
              <MachineIcon machine={getRecipe(game, recipe).machine} />
              <ListItemText
                primary={getMachine(game, getRecipe(game, recipe).machine).name}
                secondary={<MiniRecipe recipe={getRecipe(game, recipe)} />}
              />
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
