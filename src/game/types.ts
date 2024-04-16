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

export type Category = GameItem & {
  readonly machines: ReadonlyArray<string>;
  readonly recipes: ReadonlyArray<string>;
};

export type Machine = GameItem &
  WithIcon & {
    readonly category: string;
    readonly workers: number;
    readonly maintenance?: Maintenance;
    readonly electricityProduction: number;
    readonly computingProduction: number;
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
} & Production;

export type GameData = {
  readonly categories: Record<string, Category>;
  readonly machines: Record<string, Machine>;
  readonly products: Record<string, Product>;
  readonly recipes: Record<string, Recipe>;
};

export type Game = GameData & {
  getCategory: (id: string) => Category;
  getMachine: (id: string) => Machine;
  getProduct: (id: string) => Product;
  getRecipe: (id: string) => Recipe;
};
