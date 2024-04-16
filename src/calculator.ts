import { Game, Production } from "./data/types.js";

export type CalculatorInput = {
  machines: ReadonlyArray<{
    machine: string;
    recipe: string;
    quantity: number;
  }>;
};

export type CalculatorOutput = CalculatorInput & {
  electricityProduction: number;
  computingProduction: number;
} & Production;

export function calculate(
  game: Game,
  input: CalculatorInput
): CalculatorOutput {
  const machines = input.machines.map((machineInput) => ({
    machine: game.getMachine(machineInput.machine),
    recipe: game.getRecipe(machineInput.recipe),
    quantity: machineInput.quantity,
  }));

  return {
    ...input,
    ...sumProduction(
      ...machines.map((m) => multiplyProduction(m.recipe, m.quantity))
    ),
    electricityProduction: machines.reduce(
      (sum, m) => sum + m.machine.electricityProduction,
      0
    ),
    computingProduction: machines.reduce(
      (sum, m) => sum + m.machine.computingProduction,
      0
    ),
  };
}

export function combineOutputs(
  ...outputs: Array<CalculatorOutput>
): CalculatorOutput {
  const machines = outputs
    .flatMap((o) => o.machines)
    .reduce(
      (agg, machine) =>
        agg.some(
          (m) => m.machine === machine.machine && m.recipe === machine.recipe
        )
          ? agg.map((m) =>
              m.machine === machine.machine && m.recipe === machine.recipe
                ? { ...m, quantity: m.quantity + machine.quantity }
                : m
            )
          : [...agg, machine],
      [] as ReadonlyArray<CalculatorOutput["machines"][number]>
    );

  return {
    machines,
    ...sumProduction(...outputs),
    electricityProduction: outputs.reduce(
      (sum, o) => sum + o.electricityProduction,
      0
    ),
    computingProduction: outputs.reduce(
      (sum, o) => sum + o.computingProduction,
      0
    ),
  };
}

function sumProduction(...productions: ReadonlyArray<Production>): Production {
  const quantities = productions.reduce(
    (acc, { inputs, outputs }) => {
      inputs.forEach(
        ({ product, quantity }) =>
          (acc[product] = (acc[product] ?? 0) - quantity)
      );
      outputs.forEach(
        ({ product, quantity }) =>
          (acc[product] = (acc[product] ?? 0) + quantity)
      );
      return acc;
    },
    {} as Record<string, number>
  );

  const products = Object.entries(quantities)
    .filter(([_, quantity]) => quantity !== 0)
    .map(([product, quantity]) => ({
      product,
      quantity,
    }));

  return {
    inputs: products
      .filter((p) => p.quantity < 0)
      .map(({ product, quantity }) => ({ product, quantity: -quantity }))
      .sort((a, b) => b.quantity - a.quantity),
    outputs: products
      .filter((p) => p.quantity > 0)
      .sort((a, b) => b.quantity - a.quantity),
  };
}

function multiplyProduction(
  { inputs, outputs }: Production,
  factor: number
): Production {
  return sumProduction({
    inputs: (factor >= 0 ? inputs : outputs).map(({ product, quantity }) => ({
      product,
      quantity: Math.abs(factor) * quantity,
    })),
    outputs: (factor >= 0 ? outputs : inputs).map(({ product, quantity }) => ({
      product,
      quantity: Math.abs(factor) * quantity,
    })),
  });
}
