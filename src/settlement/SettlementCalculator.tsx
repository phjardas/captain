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
import { useGame } from "../game/context.js";
import { getProduct } from "../game/game.js";
import {
  amenities,
  calculateSettlementDemands,
  foods,
  type HousingTierId,
  housingTiers,
  services,
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
    suppliedAmenities: ["HouseholdGoods", "HouseholdAppliances"],
    suppliedServices: ["Biomass", "Recyclables"],
  });
  const demands = calculateSettlementDemands(settlement);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
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
  const game = useGame();

  return (
    <Card>
      <CardHeader title="Settlement" />
      <CardContent>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <TextField
              label="Population"
              type="number"
              value={settlement.population}
              onChange={(e) =>
                onChange((s) => ({
                  ...s,
                  population: parseInt(e.target.value),
                }))
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
          </Box>
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
                label={
                  <Box
                    component="span"
                    sx={{ display: "flex", alignItems: "center", gap: 1 }}
                  >
                    <ProductIcon product={food.product} />{" "}
                    {getProduct(game, food.product).name}
                  </Box>
                }
              />
            ))}
          </FormControl>
          <FormControl component="fieldset" variant="standard">
            <FormLabel component="legend">Supplied Amenities</FormLabel>
            {amenities.map((amenity) => (
              <FormControlLabel
                key={amenity.product}
                control={
                  <Checkbox
                    checked={settlement.suppliedAmenities?.includes(
                      amenity.product,
                    )}
                    onChange={(e) =>
                      onChange((s) => ({
                        ...s,
                        suppliedAmenities: e.target.checked
                          ? [...(s.suppliedAmenities ?? []), amenity.product]
                          : s.suppliedAmenities?.filter(
                              (a) => a !== amenity.product,
                            ),
                      }))
                    }
                  />
                }
                label={
                  <Box
                    component="span"
                    sx={{ display: "flex", alignItems: "center", gap: 1 }}
                  >
                    <ProductIcon product={amenity.product} />{" "}
                    {getProduct(game, amenity.product).name}
                  </Box>
                }
              />
            ))}
          </FormControl>
          <FormControl component="fieldset" variant="standard">
            <FormLabel component="legend">Supplied Services</FormLabel>
            {services.map((service) => (
              <FormControlLabel
                key={service.id}
                control={
                  <Checkbox
                    checked={settlement.suppliedServices?.includes(service.id)}
                    onChange={(e) =>
                      onChange((s) => ({
                        ...s,
                        suppliedServices: e.target.checked
                          ? [...(s.suppliedServices ?? []), service.id]
                          : s.suppliedServices?.filter((a) => a !== service.id),
                      }))
                    }
                  />
                }
                label={
                  <Box
                    component="span"
                    sx={{ display: "flex", alignItems: "center", gap: 1 }}
                  >
                    <ProductIcon product={service.id} />{" "}
                    {getProduct(game, service.id).name}
                  </Box>
                }
              />
            ))}
          </FormControl>
        </Box>
      </CardContent>
    </Card>
  );
}

function DemandsDisplay({
  demands: { food, infrastructure, amenities, waste },
}: {
  readonly demands: SettlementDemands;
}) {
  return (
    <Card>
      <CardHeader title="Demands" />
      <Box sx={{ display: "flex", gap: 4 }}>
        <List subheader={<ListSubheader>Food</ListSubheader>}>
          {food.map((demand) => (
            <ProductListItem
              key={demand.product}
              product={demand.product}
              quantity={Math.abs(demand.demand)}
            />
          ))}
        </List>
        <List subheader={<ListSubheader>Amenities</ListSubheader>}>
          {amenities.map((demand) => (
            <ProductListItem
              key={demand.product}
              product={demand.product}
              quantity={Math.abs(demand.demand)}
            />
          ))}
        </List>
        <List subheader={<ListSubheader>Infrastructure</ListSubheader>}>
          {infrastructure.map((demand) => (
            <ProductListItem
              key={demand.product}
              product={demand.product}
              quantity={Math.abs(demand.demand)}
            />
          ))}
        </List>
        <List subheader={<ListSubheader>Waste</ListSubheader>}>
          {waste.map((demand) => (
            <ProductListItem
              key={demand.product}
              product={demand.product}
              quantity={Math.abs(demand.demand)}
            />
          ))}
        </List>
      </Box>
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
