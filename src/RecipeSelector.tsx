import { ArrowBack } from "@mui/icons-material";
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
import { useProductionPlanDispatch } from "./context.js";
import Dialog from "./dialog/index.js";
import { gameData } from "./game/data.js";
import { getMachine } from "./game/game.js";
import type { Product, Recipe } from "./game/types.js";

export default function RecipeSelector({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [product, setProduct] = useState<Product>();
  const dispatch = useProductionPlanDispatch();

  return (
    <Dialog title="Select recipe" open={open} onClose={onClose}>
      <DialogContent>
        {product ? (
          <RecipeSelection
            product={product}
            select={(recipe) => {
              dispatch({ type: "add-recipe", recipe: recipe.id, quantity: 1 });
              onClose();
            }}
          />
        ) : (
          <ProductSelection select={setProduct} />
        )}
      </DialogContent>
      <DialogActions>
        {product && (
          <Button
            variant="text"
            color="inherit"
            startIcon={<ArrowBack />}
            onClick={() => setProduct(undefined)}
          >
            Back
          </Button>
        )}
        <Button variant="text" color="inherit" onClick={onClose}>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}

function ProductSelection({ select }: { select: (product: Product) => void }) {
  const [search, setSearch] = useState("");

  const products = useMemo(() => {
    const s = search.toLocaleLowerCase();

    return Object.values(gameData.products)
      .filter(
        (product) =>
          product.name.toLocaleLowerCase().includes(s) ||
          product.id.toLocaleLowerCase().includes(s)
      )
      .toSorted((a, b) => a.name.localeCompare(b.name));
  }, [search]);

  return (
    <Stack sx={{ pt: 1, gap: 2 }}>
      <TextField
        type="search"
        label="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <List dense>
        {products.slice(0, 10).map((product) => (
          <ListItemButton
            key={product.id}
            disableGutters
            onClick={() => select(product)}
          >
            <ListItemIcon>
              <img
                src={`/assets/products/${product.icon}`}
                width={32}
                height={32}
              />
            </ListItemIcon>
            <ListItemText primary={product.name} />
          </ListItemButton>
        ))}
      </List>
      {products.length > 10 && (
        <Alert severity="info">
          and {products.length - 10} more results&hellip;
        </Alert>
      )}
    </Stack>
  );
}

function RecipeSelection({
  product,
  select,
}: {
  product: Product;
  select: (recipe: Recipe) => void;
}) {
  const [search, setSearch] = useState("");

  const recipes = useMemo(() => {
    const s = search.toLocaleLowerCase();

    return Object.values(gameData.recipes)
      .filter(
        (recipe) =>
          product.recipes.output.includes(recipe.id) &&
          (recipe.name.toLocaleLowerCase().includes(s) ||
            recipe.id.toLocaleLowerCase().includes(s))
      )
      .toSorted((a, b) => a.name.localeCompare(b.name));
  }, [search]);

  return (
    <Stack sx={{ pt: 1, gap: 2 }}>
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
            onClick={() => select(recipe)}
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
      </List>
      {recipes.length > 10 && (
        <Alert severity="info">
          and {recipes.length - 10} more results&hellip;
        </Alert>
      )}
    </Stack>
  );
}
