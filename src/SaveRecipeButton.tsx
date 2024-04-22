import { Save } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useProductionPlan } from "./context.js";
import { useStorage } from "./storage/useStorage.js";

export default function SaveRecipeButton() {
  const { id, input, output } = useProductionPlan();
  const storage = useStorage();

  return output ? (
    <Button
      variant="outlined"
      color="primary"
      startIcon={<Save />}
      onClick={() =>
        storage.savePlan({ id, input, production: output.production })
      }
    >
      Save plan
    </Button>
  ) : null;
}
