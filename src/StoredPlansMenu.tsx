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
import type { Storage } from "./storage/types.js";
import { useStorage } from "./storage/useStorage.js";

export default function StoredPlansMenu() {
  const storage = useStorage();

  return storage.plans.length ? (
    <StoredPlansMenuImpl storage={storage} />
  ) : null;
}

function StoredPlansMenuImpl({ storage }: { storage: Storage }) {
  const dispatch = useProductionPlanDispatch();
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
        {storage.plans
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
                  storage.deletePlan(plan.id);
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
