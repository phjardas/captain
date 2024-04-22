import { Save } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useProductionPlan } from "./context.js";
import { useSaveProductionPlan, useStorage } from "./storage/context.js";

export default function SaveRecipeButton() {
  const { id, input, output } = useProductionPlan();
  const storage = useStorage();
  const saveProductionPlan = useSaveProductionPlan();

  return output && storage.state === "ready" && storage.data ? (
    <Button
      variant="outlined"
      color="primary"
      startIcon={<Save />}
      onClick={() => {
        saveProductionPlan({ id, input, production: output.production });
      }}
    >
      Save plan
    </Button>
  ) : null;
}
