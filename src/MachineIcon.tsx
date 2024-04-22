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

  return <img src={icon} width={size} height={size} title={name} />;
}
