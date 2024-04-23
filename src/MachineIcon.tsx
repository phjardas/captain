import { Paper, Popper, Typography } from "@mui/material";
import {
  bindHover,
  bindPopper,
  bindToggle,
  usePopupState,
} from "material-ui-popup-state/hooks";
import { useId } from "react";
import { useGame } from "./game/context.js";
import { getMachine } from "./game/game.js";
import type { Machine } from "./game/types.js";

export default function MachineIcon({
  machine,
  size = 32,
}: {
  machine: Machine | string;
  size?: number;
}) {
  const game = useGame();
  const { icon, name } = getMachine(game, machine);
  const popupState = usePopupState({ variant: "popper", popupId: useId() });

  return (
    <>
      <img
        src={icon}
        width={size}
        height={size}
        {...bindHover(popupState)}
        {...bindToggle(popupState)}
      />
      <Popper {...bindPopper(popupState)}>
        <Paper sx={{ px: 1, py: 0.5 }}>
          <Typography>{name}</Typography>
        </Paper>
      </Popper>
    </>
  );
}
