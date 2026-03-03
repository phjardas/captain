import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { type Dispatch, type SetStateAction, useState } from "react";
import {
  calculateSettlementDemands,
  foods,
  type HousingTierId,
  housingTiers,
  type Settlement,
  type SettlementDemands,
} from "../game/settlement.js";
import ProductIcon from "../ProductIcon.js";
import ProductQuantity from "../ProductQuantity.js";

export default function SettlementCalculator() {
  const [settlement, setSettlement] = useState<Settlement>({
    population: 1920,
    housingTier: 3,
    suppliedFoodTypes: ["Potato", "Corn", "Bread", "Vegetables"],
  });
  const demands = calculateSettlementDemands(settlement);

  return (
    <Box sx={{ display: "flex", gap: 2 }}>
      <SettlementEditor settlement={settlement} onChange={setSettlement} />
      <DemandsDisplay demands={demands} />
    </Box>
  );
}

function SettlementEditor({
  settlement,
  onChange,
}: {
  readonly settlement: Settlement;
  readonly onChange: Dispatch<SetStateAction<Settlement>>;
}) {
  return (
    <Card>
      <CardHeader title="Settlement" />
      <CardContent>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField
            label="Population"
            type="number"
            value={settlement.population}
            onChange={(e) =>
              onChange((s) => ({ ...s, population: parseInt(e.target.value) }))
            }
            slotProps={{ htmlInput: { min: 0, step: 1 } }}
          />
          <FormControl>
            <InputLabel>Housing Tier</InputLabel>
            <Select
              label="Housing Tier"
              value={settlement.housingTier ?? 1}
              onChange={(e) =>
                onChange((s) => ({
                  ...s,
                  housingTier: e.target.value as HousingTierId,
                }))
              }
            >
              {housingTiers.map((tier) => (
                <MenuItem key={tier.id} value={tier.id}>
                  {tier.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl component="fieldset" variant="standard">
            <FormLabel component="legend">Supplied Food Types</FormLabel>
            {foods.map((food) => (
              <FormControlLabel
                key={food.product}
                control={
                  <Checkbox
                    checked={settlement.suppliedFoodTypes?.includes(
                      food.product,
                    )}
                    onChange={(e) =>
                      onChange((s) => ({
                        ...s,
                        suppliedFoodTypes: e.target.checked
                          ? [...(s.suppliedFoodTypes ?? []), food.product]
                          : s.suppliedFoodTypes?.filter(
                              (f) => f !== food.product,
                            ),
                      }))
                    }
                  />
                }
                label={food.product}
              />
            ))}
          </FormControl>
        </Box>
      </CardContent>
    </Card>
  );
}

function DemandsDisplay({ demands }: { readonly demands: SettlementDemands }) {
  return (
    <Card>
      <CardHeader title="Demands" />
      <List subheader={<ListSubheader>Food</ListSubheader>}>
        {demands.food.map((demand) => (
          <ProductListItem
            key={demand.product}
            product={demand.product}
            quantity={demand.demand}
          />
        ))}
      </List>
      <List subheader={<ListSubheader>Infrastructure</ListSubheader>}>
        {demands.infrastructure.map((demand) => (
          <ProductListItem
            key={demand.product}
            product={demand.product}
            quantity={demand.demand}
          />
        ))}
      </List>
    </Card>
  );
}

function ProductListItem({
  product,
  quantity,
}: {
  readonly product: string;
  readonly quantity: number;
}) {
  return (
    <ListItem>
      <ListItemIcon>
        <ProductIcon product={product} />
      </ListItemIcon>
      <ListItemText
        primary={
          <ProductQuantity product={product} quantity={quantity} hideName />
        }
      />
    </ListItem>
  );
}
