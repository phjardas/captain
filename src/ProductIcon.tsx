import { Paper, Popper, Typography } from "@mui/material";
import {
  bindHover,
  bindPopper,
  bindToggle,
  usePopupState,
} from "material-ui-popup-state/hooks";
import { useId } from "react";
import { useGame } from "./game/context.js";
import { getProduct } from "./game/game.js";
import type { Product } from "./game/types.js";

export default function ProductIcon({
  product,
  size = 32,
}: {
  product: string | Product;
  size?: number;
}) {
  const game = useGame();
  const { name, icon } = getProduct(game, product);
  const popupState = usePopupState({ variant: "popper", popupId: useId() });

  return (
    <>
      <img src={icon} width={size} height={size} {...bindHover(popupState)} />
      <Popper
        {...bindPopper(popupState)}
        {...bindToggle(popupState)}
        sx={{ zIndex: "var(--mui-zIndex-tooltip)" }}
      >
        <Paper sx={{ px: 1.5, py: 0.5 }}>
          <Typography>{name}</Typography>
        </Paper>
      </Popper>
    </>
  );
}
