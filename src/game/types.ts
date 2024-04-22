export type Identifiable = { readonly id: string };
export type Named = { readonly name: string };
export type WithIcon = { readonly icon: string };

export type Quantity = { readonly quantity: number };
export type ProductQuantity = { readonly product: string } & Quantity;

export type InputOutput = {
  readonly input: ReadonlyArray<string>;
  readonly output: ReadonlyArray<string>;
};

export type Production = {
  readonly inputs: ReadonlyArray<ProductQuantity>;
  readonly outputs: ReadonlyArray<ProductQuantity>;
};

export type Machine = Identifiable &
  Named &
  WithIcon & {
    readonly buildCosts: ReadonlyArray<ProductQuantity>;
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
