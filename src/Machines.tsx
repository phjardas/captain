import {
  Card,
  CardHeader,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { OutputRecipe } from "./game/calculator.js";

export default function Machines({
  recipes,
}: {
  recipes: ReadonlyArray<OutputRecipe>;
}) {
  return (
    <Card>
      <CardHeader title="Machines" />
      <List>
        {recipes.map(({ recipe, machine, quantity }, i) => (
          <ListItem key={i}>
            <ListItemIcon>
              <img src={`/assets/${machine.icon}.png`} width={32} height={32} />
            </ListItemIcon>
            <ListItemText
              primary={`${quantity}x ${machine.name}: ${recipe.name}`}
            />
          </ListItem>
        ))}
      </List>
    </Card>
  );
}
