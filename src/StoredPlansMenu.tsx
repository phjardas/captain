import { ArrowDropDown, ArrowDropUp, Delete } from "@mui/icons-material";
import {
  Button,
  IconButton,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";
import {
  bindMenu,
  bindTrigger,
  usePopupState,
} from "material-ui-popup-state/hooks";
import { useId } from "react";
import MiniRecipe from "./MiniRecipe.js";
import { useProductionPlanDispatch } from "./context.js";
import { useDeleteProductionPlan, useStorage } from "./storage/context.js";
import type { StoredPlan } from "./storage/types.js";

export default function StoredPlansMenu() {
  const storage = useStorage();

  return storage.state === "ready" &&
    storage.data &&
    storage.data.plans.length ? (
    <StoredPlansMenuImpl plans={storage.data.plans} />
  ) : null;
}

function StoredPlansMenuImpl({ plans }: { plans: ReadonlyArray<StoredPlan> }) {
  const dispatch = useProductionPlanDispatch();
  const deleteProductionPlan = useDeleteProductionPlan();
  const popupState = usePopupState({ variant: "popover", popupId: useId() });

  return (
    <>
      <Button
        color="inherit"
        endIcon={popupState.isOpen ? <ArrowDropUp /> : <ArrowDropDown />}
        {...bindTrigger(popupState)}
      >
        Plans
      </Button>
      <Menu {...bindMenu(popupState)}>
        {plans
          .toSorted((a, b) => b.updatedAt - a.updatedAt)
          .map((plan) => (
            <MenuItem
              key={plan.id}
              onClick={() => {
                dispatch({
                  type: "replace-plan",
                  id: plan.id,
                  input: plan.input,
                });
                popupState.close();
              }}
            >
              <ListItemText primary={<MiniRecipe recipe={plan.production} />} />
              <IconButton
                edge="end"
                sx={{ ml: 2 }}
                onClick={(e) => {
                  e.stopPropagation();
                  deleteProductionPlan(plan.id);
                }}
              >
                <Delete />
              </IconButton>
            </MenuItem>
          ))}
      </Menu>
    </>
  );
}
