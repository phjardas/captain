import {
  Alert,
  Button,
  DialogActions,
  DialogContent,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  TextField,
} from "@mui/material";
import { useMemo, useState } from "react";
import Dialog from "./dialog/index.js";
import { gameData } from "./game/data.js";
import { getMachine } from "./game/game.js";

export default function RecipeSelector({
  onSelect,
  open,
  onClose,
}: {
  onSelect: (recipe: string) => void;
  open: boolean;
  onClose: () => void;
}) {
  const [search, setSearch] = useState("");

  const recipes = useMemo(() => {
    const s = search.toLocaleLowerCase();

    return Object.values(gameData.recipes)
      .filter(
        (recipe) =>
          recipe.name.toLocaleLowerCase().includes(s) ||
          recipe.id.toLocaleLowerCase().includes(s)
      )
      .toSorted((a, b) => a.name.localeCompare(b.name));
  }, [search]);

  return (
    <Dialog title="Select recipe" open={open} onClose={onClose}>
      <DialogContent>
        <Stack sx={{ pt: 1 }}>
          <TextField
            type="search"
            label="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <List dense>
            {recipes.slice(0, 10).map((recipe) => (
              <ListItemButton
                key={recipe.id}
                disableGutters
                onClick={() => {
                  onSelect(recipe.id);
                  onClose();
                }}
              >
                <ListItemIcon>
                  <img
                    src={`/assets/machines/${getMachine(recipe.machine).icon}`}
                    width={32}
                    height={32}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={recipe.name}
                  secondary={getMachine(recipe.machine).name}
                />
              </ListItemButton>
            ))}
            {recipes.length > 10 && (
              <Alert severity="info">
                and {recipes.length - 10} more results&hellip;
              </Alert>
            )}
          </List>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button variant="text" color="inherit" onClick={onClose}>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}
