import { Clear, Delete } from "@mui/icons-material";
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
  TextField,
} from "@mui/material";
import { useState } from "react";
import AddRecipeButton from "./AddRecipeButton.js";
import MachineIcon from "./MachineIcon.js";
import MiniRecipe from "./MiniRecipe.js";
import SaveRecipeButton from "./SaveRecipeButton.js";
import { useProductionPlan, useProductionPlanDispatch } from "./context.js";
import { useGame } from "./game/context.js";
import { getMachine, getRecipe } from "./game/game.js";

export default function Recipes() {
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
            <RecipeItem key={i} recipe={recipe} quantity={quantity} index={i} />
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

function RecipeItem({
  recipe,
  quantity: initialQuantity,
  index,
}: {
  readonly recipe: string;
  readonly quantity: number;
  readonly index: number;
}) {
  const game = useGame();
  const dispatch = useProductionPlanDispatch();
  const [quantity, setQuantity] = useState(() => initialQuantity.toString());

  return (
    <ListItem
      sx={{ gap: 1 }}
      secondaryAction={
        <IconButton
          edge="end"
          onClick={() =>
            dispatch({ type: "set-recipe-quantity", index, quantity: 0 })
          }
        >
          <Delete />
        </IconButton>
      }
    >
      <TextField
        size="small"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        onBlur={(e) => {
          const quantity = parseFloat(e.target.value);
          if (!isNaN(quantity)) {
            dispatch({ type: "set-recipe-quantity", index, quantity });
          }
        }}
        sx={{ width: "4.5rem", input: { textAlign: "right" } }}
        slotProps={{
          htmlInput: { min: 0, step: "any" },
        }}
      />
      <MachineIcon machine={getRecipe(game, recipe).machine} />
      <ListItemText
        primary={getMachine(game, getRecipe(game, recipe).machine).name}
        secondary={<MiniRecipe recipe={getRecipe(game, recipe)} />}
      />
    </ListItem>
  );
}
