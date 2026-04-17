import FavoriteIcon from "@mui/icons-material/Favorite";
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
  Slider,
  TextField,
  Typography,
} from "@mui/material";
import { type Dispatch, type SetStateAction, useState } from "react";
import { useGame } from "../game/context.js";
import { getProduct } from "../game/game.js";
import {
  amenities,
  calculateSettlementDemands,
  consumptionDifficultyLevels,
  edicts,
  foods,
  type HousingTierId,
  housingTiers,
  medicalSupplies,
  type MedicalSupplyId,
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
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
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
            <FormControl>
              <InputLabel>Medical Supply</InputLabel>
              <Select
                label="Medical Supply"
                value={settlement.suppliedMedicalSupply ?? ""}
                onChange={(e) =>
                  onChange((s) => ({
                    ...s,
                    suppliedMedicalSupply:
                      (e.target.value as MedicalSupplyId) || undefined,
                  }))
                }
              >
                <MenuItem value="">None</MenuItem>
                {medicalSupplies.map((supply) => (
                  <MenuItem key={supply.product} value={supply.product}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <ProductIcon product={supply.product} size={24} />
                      {getProduct(game, supply.product).name}
                    </Box>
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
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
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
                      checked={settlement.suppliedServices?.includes(
                        service.id,
                      )}
                      onChange={(e) =>
                        onChange((s) => ({
                          ...s,
                          suppliedServices: e.target.checked
                            ? [...(s.suppliedServices ?? []), service.id]
                            : s.suppliedServices?.filter(
                                (a) => a !== service.id,
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
                      <ProductIcon product={service.id} />{" "}
                      {getProduct(game, service.id).name}
                    </Box>
                  }
                />
              ))}
            </FormControl>
          </Box>
          <FormControl component="fieldset" variant="standard" sx={{ px: 2 }}>
            <FormLabel component="legend">Edicts</FormLabel>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                mt: 1,
                minWidth: 180,
              }}
            >
              {edicts.map((edict) => {
                const activeLevel = settlement.activeEdicts?.[edict.id] ?? 0;
                const marks = [
                  { value: 0, label: "Off" },
                  ...edict.levels.map((level, i) => ({
                    value: i + 1,
                    label: level.label
                      .replace(/^Level \d+ /, "")
                      .replace(/[()]/g, ""),
                  })),
                ];
                return (
                  <Box key={edict.id}>
                    <Typography variant="caption" color="text.secondary">
                      {edict.name}
                    </Typography>
                    <Slider
                      min={0}
                      max={edict.levels.length}
                      step={1}
                      marks={marks}
                      value={activeLevel}
                      onChange={(_, value) =>
                        onChange((s) => ({
                          ...s,
                          activeEdicts: {
                            ...s.activeEdicts,
                            [edict.id]: value as number,
                          },
                        }))
                      }
                      valueLabelDisplay="off"
                      sx={{ mb: 1 }}
                    />
                  </Box>
                );
              })}
            </Box>
          </FormControl>
          <FormControl component="fieldset" variant="standard">
            <FormLabel component="legend">Difficulty</FormLabel>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                mt: 1,
              }}
            >
              <FormControl>
                <InputLabel>Food Consumption</InputLabel>
                <Select
                  label="Food Consumption"
                  value={settlement.difficulty?.foodConsumption ?? 1}
                  onChange={(e) =>
                    onChange((s) => ({
                      ...s,
                      difficulty: {
                        ...s.difficulty,
                        foodConsumption: e.target.value as number,
                      },
                    }))
                  }
                >
                  {consumptionDifficultyLevels.map((level) => (
                    <MenuItem key={level.factor} value={level.factor}>
                      {level.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl>
                <InputLabel>Goods & Services Consumption</InputLabel>
                <Select
                  label="Goods & Services Consumption"
                  value={settlement.difficulty?.goodsConsumption ?? 1}
                  onChange={(e) =>
                    onChange((s) => ({
                      ...s,
                      difficulty: {
                        ...s.difficulty,
                        goodsConsumption: e.target.value as number,
                      },
                    }))
                  }
                >
                  {consumptionDifficultyLevels.map((level) => (
                    <MenuItem key={level.factor} value={level.factor}>
                      {level.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </FormControl>
        </Box>
      </CardContent>
    </Card>
  );
}

function DemandsDisplay({
  demands: {
    food,
    infrastructure,
    amenities,
    waste,
    medicalSupply,
    unity,
    health,
  },
}: {
  readonly demands: SettlementDemands;
}) {
  return (
    <Card>
      <CardHeader title="Demands" />
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
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
          {medicalSupply.map((demand) => (
            <ProductListItem
              key={demand.product}
              product={demand.product}
              quantity={Math.abs(demand.demand)}
            />
          ))}
        </List>
        <List subheader={<ListSubheader>Output</ListSubheader>}>
          <ListItem>
            <ListItemIcon>
              <ProductIcon product="Upoints" />
            </ListItemIcon>
            <ListItemText
              primary={
                <ProductQuantity
                  product="Upoints"
                  quantity={unity.total}
                  hideName
                />
              }
              secondary={
                <Box
                  component="span"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    fontSize: "0.75rem",
                  }}
                >
                  {unity.infrastructure > 0 && (
                    <span>
                      Infrastructure:{" "}
                      {unity.infrastructure.toLocaleString(undefined, {
                        maximumFractionDigits: 1,
                      })}
                    </span>
                  )}
                  {unity.food > 0 && (
                    <span>
                      Food:{" "}
                      {unity.food.toLocaleString(undefined, {
                        maximumFractionDigits: 1,
                      })}
                    </span>
                  )}
                  {unity.amenities > 0 && (
                    <span>
                      Amenities:{" "}
                      {unity.amenities.toLocaleString(undefined, {
                        maximumFractionDigits: 1,
                      })}
                    </span>
                  )}
                  {unity.medicine > 0 && (
                    <span>
                      Medicine:{" "}
                      {unity.medicine.toLocaleString(undefined, {
                        maximumFractionDigits: 1,
                      })}
                    </span>
                  )}
                  {unity.edicts !== 0 && (
                    <span>
                      Edicts:{" "}
                      {unity.edicts.toLocaleString(undefined, {
                        maximumFractionDigits: 1,
                      })}
                    </span>
                  )}
                </Box>
              }
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <FavoriteIcon color="error" />
            </ListItemIcon>
            <ListItemText
              primary={health.total.toLocaleString(undefined, {
                maximumFractionDigits: 1,
              })}
              secondary={
                <Box
                  component="span"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    fontSize: "0.75rem",
                  }}
                >
                  {health.water !== 0 && (
                    <span>
                      Water:{" "}
                      {health.water.toLocaleString(undefined, {
                        maximumFractionDigits: 1,
                      })}
                    </span>
                  )}
                  {health.food !== 0 && (
                    <span>
                      Food:{" "}
                      {health.food.toLocaleString(undefined, {
                        maximumFractionDigits: 1,
                      })}
                    </span>
                  )}
                  {health.medicine !== 0 && (
                    <span>
                      Medicine:{" "}
                      {health.medicine.toLocaleString(undefined, {
                        maximumFractionDigits: 1,
                      })}
                    </span>
                  )}
                </Box>
              }
            />
          </ListItem>
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
