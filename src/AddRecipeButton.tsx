import { Button } from "@mui/material";
import {
  bindPopover,
  bindTrigger,
  usePopupState,
} from "material-ui-popup-state/hooks";
import { useId } from "react";
import RecipeSelector from "./RecipeSelector.js";

export default function AddRecipeButton() {
  const popupState = usePopupState({ variant: "popover", popupId: useId() });

  return (
    <>
      <Button variant="contained" color="primary" {...bindTrigger(popupState)}>
        Add recipe
      </Button>
      {popupState.isOpen && <RecipeSelector {...bindPopover(popupState)} />}
    </>
  );
}
