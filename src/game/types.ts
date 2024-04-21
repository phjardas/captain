export type Identifiable = { readonly id: string };
export type Named = { readonly name: string };
export type WithIcon = { readonly icon: string };
export type GameItem = Identifiable & Named;

export type Quantity = { readonly quantity: number };
export type ProductQuantity = { readonly product: string } & Quantity;
export type Maintenance = { readonly type: "1" | "2" | "3" } & Quantity;

export type InputOutput = {
  readonly input: ReadonlyArray<string>;
  readonly output: ReadonlyArray<string>;
};

export type Production = {
  readonly inputs: ReadonlyArray<ProductQuantity>;
  readonly outputs: ReadonlyArray<ProductQuantity>;
};

export type Machine = GameItem &
  WithIcon & {
    readonly buildCosts: ReadonlyArray<ProductQuantity>;
    readonly recipes: ReadonlyArray<string>;
    readonly products: InputOutput;
  };

export type Product = GameItem &
  WithIcon & {
    readonly recipes: InputOutput;
    readonly machines: InputOutput;
  };

export type Recipe = GameItem & {
  readonly machine: string;
  readonly duration: number;
  readonly workers?: number;
  readonly electricityProduction?: number;
  readonly computingProduction?: number;
  readonly maintenance?: Maintenance;
} & Production;

export type GameData = {
  readonly machines: Record<string, Machine>;
  readonly products: Record<string, Product>;
  readonly recipes: Record<string, Recipe>;
};
