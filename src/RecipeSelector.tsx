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
  ListSubheader,
  Stack,
  TextField,
} from "@mui/material";
import { useMemo, useState } from "react";
import MachineIcon from "./MachineIcon.js";
import MiniRecipe from "./MiniRecipe.js";
import ProductIcon from "./ProductIcon.js";
import { useProductionPlanDispatch } from "./context.js";
import Dialog from "./dialog/index.js";
import { useGame } from "./game/context.js";
import { getMachine } from "./game/game.js";
import type { Machine, Product, Recipe } from "./game/types.js";

export default function RecipeSelector({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [product, setProduct] = useState<Product>();
  const [machine, setMachine] = useState<Machine>();
  const dispatch = useProductionPlanDispatch();

  return (
    <Dialog
      title={
        product
          ? `Select recipe to produce ${product.name}`
          : machine
            ? `Select recipe for ${machine.name}`
            : "Select product or machine"
      }
      open={open}
      onClose={onClose}
    >
      <DialogContent>
        {product ? (
          <ProductRecipeSelection
            product={product}
            select={(recipe) => {
              dispatch({ type: "add-recipe", recipe: recipe.id, quantity: 1 });
              onClose();
            }}
          />
        ) : machine ? (
          <MachineRecipeSelection
            machine={machine}
            select={(recipe) => {
              dispatch({ type: "add-recipe", recipe: recipe.id, quantity: 1 });
              onClose();
            }}
          />
        ) : (
          <ProductOrMachineSelection
            selectProduct={setProduct}
            selectMachine={setMachine}
          />
        )}
      </DialogContent>
      <DialogActions>
        {(product || machine) && (
          <Button
            variant="text"
            color="inherit"
            startIcon={<ArrowBack />}
            onClick={() => {
              setProduct(undefined);
              setMachine(undefined);
            }}
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

type ProductOrMachine = { id: string; name: string } & (
  | { type: "product"; product: Product }
  | { type: "machine"; machine: Machine }
);

function ProductOrMachineSelection({
  selectProduct,
  selectMachine,
}: {
  selectProduct: (product: Product) => void;
  selectMachine: (machine: Machine) => void;
}) {
  const [search, setSearch] = useState("");

  const game = useGame();
  const items = useMemo(() => {
    const s = search.toLocaleLowerCase();

    return [
      ...Object.values(game.products)
        .filter((product) => product.name.toLocaleLowerCase().includes(s))
        .map(
          (product) =>
            ({
              type: "product",
              product,
              id: product.id,
              name: product.name,
            }) as ProductOrMachine
        ),
      ...Object.values(game.machines)
        .filter((product) => product.name.toLocaleLowerCase().includes(s))
        .map(
          (machine) =>
            ({
              type: "machine",
              machine,
              id: machine.id,
              name: machine.name,
            }) as ProductOrMachine
        ),
    ].toSorted((a, b) => a.name.localeCompare(b.name));
  }, [game.products, search]);

  return (
    <Stack sx={{ pt: 1, gap: 2 }}>
      <TextField
        type="search"
        label="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        fullWidth
      />
      <List>
        {items.slice(0, 10).map((item) => (
          <ListItemButton
            key={item.id}
            disableGutters
            onClick={() =>
              item.type === "product"
                ? selectProduct(item.product)
                : selectMachine(item.machine)
            }
          >
            <ListItemIcon>
              {item.type === "product" ? (
                <ProductIcon product={item.product} />
              ) : (
                <MachineIcon machine={item.machine} />
              )}
            </ListItemIcon>
            <ListItemText primary={item.name} />
          </ListItemButton>
        ))}
      </List>
      {items.length > 10 && (
        <Alert severity="info">
          and {items.length - 10} more results&hellip;
        </Alert>
      )}
    </Stack>
  );
}

function ProductRecipeSelection({
  product,
  select,
}: {
  product: Product;
  select: (recipe: Recipe) => void;
}) {
  const game = useGame();

  const outputRecipes = useMemo(
    () =>
      Object.values(game.recipes)
        .filter((recipe) => product.id in recipe.outputs)
        .toSorted((a, b) => a.id.localeCompare(b.id)),
    [game.recipes, product?.id]
  );

  const inputRecipes = useMemo(
    () =>
      Object.values(game.recipes)
        .filter((recipe) => product.id in recipe.inputs)
        .toSorted((a, b) => a.id.localeCompare(b.id)),
    [game.recipes, product?.id]
  );

  return (
    <>
      {outputRecipes.length > 0 && (
        <List subheader={<ListSubheader>Producing</ListSubheader>}>
          <RecipeSelection recipes={outputRecipes} select={select} />
        </List>
      )}
      {inputRecipes.length > 0 && (
        <List subheader={<ListSubheader>Consuming</ListSubheader>}>
          <RecipeSelection recipes={inputRecipes} select={select} />
        </List>
      )}
    </>
  );
}

function MachineRecipeSelection({
  machine,
  select,
}: {
  machine: Machine;
  select: (recipe: Recipe) => void;
}) {
  const game = useGame();
  const recipes = useMemo(
    () =>
      Object.values(game.recipes)
        .filter((recipe) => recipe.machine === machine?.id)
        .toSorted((a, b) => a.id.localeCompare(b.id)),
    [game.recipes, machine?.id]
  );

  return (
    <List>
      <RecipeSelection recipes={recipes} select={select} />
    </List>
  );
}

function RecipeSelection({
  recipes,
  select,
}: {
  recipes: ReadonlyArray<Recipe>;
  select: (recipe: Recipe) => void;
}) {
  const game = useGame();

  return (
    <>
      {recipes.map((recipe) => (
        <ListItemButton
          key={recipe.id}
          disableGutters
          onClick={() => select(recipe)}
        >
          <ListItemIcon>
            <MachineIcon machine={recipe.machine} />
          </ListItemIcon>
          <ListItemText
            primary={<MiniRecipe recipe={recipe} />}
            secondary={getMachine(game, recipe.machine).name}
          />
        </ListItemButton>
      ))}
    </>
  );
}
