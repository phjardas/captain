export type Identifiable = { readonly id: string };
export type Named = { readonly name: string };
export type WithIcon = { readonly icon: string };

export type Quantity = { readonly quantity: number };

export type InputOutput = {
  readonly input: ReadonlyArray<string>;
  readonly output: ReadonlyArray<string>;
};

export type Production = {
  readonly inputs: Record<string, number>;
  readonly outputs: Record<string, number>;
};

export type Machine = Identifiable &
  Named &
  WithIcon & {
    readonly buildCosts: Record<string, number>;
  };

export type ProductType =
  | "fluid"
  | "countable"
  | "loose"
  | "molten"
  | "electricity"
  | "mech"
  | "computing"
  | "maintenance"
  | "pollution"
  | "unity"
  | "worker";

export type Product = Identifiable &
  Named &
  WithIcon & {
    readonly type: ProductType;
  };

export type Recipe = Identifiable & {
  readonly machine: string;
  readonly duration: number;
} & Production;

export type GameData = {
  readonly machines: Record<string, Machine>;
  readonly products: Record<string, Product>;
  readonly recipes: Record<string, Recipe>;
};
