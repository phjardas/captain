import {
  CalculatorOutput,
  calculate,
  combineOutputs,
  type CalculatorInput,
} from "./calculator.js";
import { loadGame } from "./data/index.js";

const game = await loadGame();

const inputs: Array<{ name: string; input: CalculatorInput }> = [
  {
    name: "Construction Parts",
    input: {
      machines: [
        { machine: "assembly_electric", quantity: 6, recipe: "cp_assembly_t2" },
        {
          machine: "assembly_electric",
          quantity: 8,
          recipe: "cp2_assembly_t1",
        },
        {
          machine: "assembly_electric",
          quantity: 2,
          recipe: "cp3_assembly_t1",
        },
        {
          machine: "assembly_electric",
          quantity: 6,
          recipe: "electronics_assembly_t1",
        },
      ],
    },
  },
  {
    name: "Concrete Slabs",
    input: {
      machines: [
        { machine: "concrete_mixer", quantity: 8, recipe: "concrete_mixing" },
        { machine: "crusher", quantity: 3, recipe: "slag_crushing" },
        { machine: "rotary_kiln", quantity: 4, recipe: "cement_production" },
      ],
    },
  },
  {
    name: "Iron",
    input: {
      machines: [
        { machine: "blast_furnace", quantity: 4, recipe: "iron_smelting" },
        { machine: "metal_caster", quantity: 8, recipe: "iron_casting" },
      ],
    },
  },
];

const outputs = inputs.map(({ name, input }) => {
  const output = calculate(game, input);
  print(name, output);
  return output;
});

print("TOTAL", combineOutputs(...outputs));

function print(title: string, output: CalculatorOutput) {
  console.log();
  console.log("=== %s ===", title);

  console.log();
  console.log("Inputs:");
  output.inputs.forEach(({ product, quantity }) =>
    console.log(
      "%s %s",
      quantity.toString().padStart(3),
      game.getProduct(product).name
    )
  );

  console.log();
  console.log("Outputs:");
  output.outputs.forEach(({ product, quantity }) =>
    console.log(
      "%s %s",
      quantity.toString().padStart(3),
      game.getProduct(product).name
    )
  );

  console.log();
  console.log("Buildings:");
  output.machines.forEach(({ machine, quantity, recipe }) =>
    console.log(
      "%s %s: %s",
      quantity.toString().padStart(2),
      game.getMachine(machine).name,
      game.getRecipe(recipe).name
    )
  );

  console.log();

  if (output.electricityProduction !== 0) {
    console.log(
      "Power %s: %d kW",
      output.electricityProduction > 0 ? "production" : "consumption",
      Math.abs(output.electricityProduction)
    );
  }

  if (output.computingProduction !== 0) {
    console.log(
      "Computing %s: %d kW",
      output.computingProduction > 0 ? "production" : "consumption",
      Math.abs(output.computingProduction)
    );
  }
}
