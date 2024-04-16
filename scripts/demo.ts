import {
  calculate,
  combineOutputs,
  getProduct,
  type CalculatorInput,
  type CalculatorOutput,
} from "../src/game/index.js";

const inputs: Array<{ name: string; input: CalculatorInput }> = [
  {
    name: "Construction Parts",
    input: {
      recipes: [
        { quantity: 6, recipe: "cp_assembly_t2" },
        { quantity: 4, recipe: "cp2_assembly_t1_2" },
        { quantity: 2, recipe: "cp3_assembly_t1" },
        { quantity: 2, recipe: "electronics_assembly_t2" },
      ],
    },
  },
];

const outputs = inputs.map(({ name, input }) => {
  const output = calculate(input);
  print(name, output);
  return output;
});

if (outputs.length > 1) {
  print("TOTAL", combineOutputs(...outputs));
}

function print(title: string, output: CalculatorOutput) {
  console.log();
  console.log("=== %s ===", title);

  console.log();
  console.log("Inputs:");
  output.inputs.forEach(({ product, quantity }) =>
    console.log(
      "%s %s",
      quantity.toString().padStart(3),
      getProduct(product).name
    )
  );

  console.log();
  console.log("Outputs:");
  output.outputs.forEach(({ product, quantity }) =>
    console.log(
      "%s %s",
      quantity.toString().padStart(3),
      getProduct(product).name
    )
  );

  console.log();
  console.log("Buildings:");
  output.recipes.forEach(({ machine, quantity, recipe }) =>
    console.log(
      "%s %s: %s",
      quantity.toString().padStart(2),
      machine.name,
      recipe.name
    )
  );

  console.log();

  if (output.workers > 0) {
    console.log("Workers: %d", output.workers);
  }

  if (output.electricityProduction !== 0) {
    console.log(
      "Power %s: %d kW",
      output.electricityProduction > 0 ? "production" : "consumption",
      Math.abs(output.electricityProduction)
    );
  }

  if (output.computingProduction !== 0) {
    console.log(
      "Computing %s: %d TFLOPS",
      output.computingProduction > 0 ? "production" : "consumption",
      Math.abs(output.computingProduction)
    );
  }
}
