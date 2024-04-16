export type Identifiable = { readonly id: string };
export type Named = { readonly name: string };
export type WithIcon = { readonly icon: string };
export type GameItem = Identifiable & Named;

export type Quantity = { readonly quantity: number };
export type ProductQuantity = { readonly product: string } & Quantity;
export type Maintenance = { readonly type: "1" | "2" | "3" } & Quantity;

export type ProductionConsumption = {
  readonly production: number;
  readonly consumption: number;
};

export type InputOutput = {
  readonly input: ReadonlyArray<string>;
  readonly output: ReadonlyArray<string>;
};

export type Category = GameItem & {
  readonly machines: ReadonlyArray<string>;
  readonly recipes: ReadonlyArray<string>;
};

export type Machine = GameItem &
  WithIcon & {
    readonly category: string;
    readonly workers: number;
    readonly maintenance?: Maintenance;
    readonly electricity: ProductionConsumption;
    readonly computing: ProductionConsumption;
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
  readonly inputs: ReadonlyArray<ProductQuantity>;
  readonly outputs: ReadonlyArray<ProductQuantity>;
};

export type GameData = {
  readonly categories: Record<string, Category>;
  readonly machines: Record<string, Machine>;
  readonly products: Record<string, Product>;
  readonly recipes: Record<string, Recipe>;
};
