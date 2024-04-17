import { Button } from "@mui/material";
import {
  bindPopover,
  bindTrigger,
  usePopupState,
} from "material-ui-popup-state/hooks";
import { useId } from "react";
import RecipeSelector from "./RecipeSelector.js";
import { useProductionPlanDispatch } from "./context.js";

export default function AddRecipeButton() {
  const dispatch = useProductionPlanDispatch();
  const popupState = usePopupState({ variant: "popover", popupId: useId() });

  return (
    <>
      <Button variant="contained" color="primary" {...bindTrigger(popupState)}>
        Add recipe
      </Button>
      <RecipeSelector
        {...bindPopover(popupState)}
        onSelect={(recipe) =>
          dispatch({ type: "add-recipe", recipe, quantity: 1 })
        }
      />
    </>
  );
}
