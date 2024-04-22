import { getMachine } from "./game/game.js";
import type { Machine } from "./game/types.js";

type MachineId = { machine: Machine } | { machineId: string };

export default function MachineIcon({
  size = 32,
  ...props
}: MachineId & { size?: number }) {
  const machine =
    "machine" in props ? props.machine : getMachine(props.machineId);
  return <img src={`/assets/${machine.icon}.png`} width={size} height={size} />;
}
