export type ItemCount = {
  name: string;
  count: number;
};

export type FlaggedItemCount = ItemCount & { flags?: number };

export type ItemType = 4 | 5 | 6 | 7 | 9;
export const fluidItemType = 4;
export const countableItemType = 5;
export const looseItemType = 6;
export const moltenItemType = 7;
export const virtualItemType = 9;

export type ExType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
export const unknownExType = 0;
export const electricityExType = 1;
export const mechPowerExType = 2;
export const computingExType = 3;
export const unityExType = 4;
export const maintenanceExType = 5;
export const pollutionExType = 6;
export const workerExType = 7;

export type Item = {
  name: string;
  label: string;
  image: string;
  type?: ItemType;
  cost?: ReadonlyArray<ItemCount>;
  isAbstractClassItem?: boolean;
  recipe?: {
    recipeDictionary: string;
  };
  prevTier?: string;
  nextTier?: string;
  exdata?: {
    exType?: ExType;
    tier?: number;
  };
};

export type Recipe = {
  name: string;
  input?: ReadonlyArray<FlaggedItemCount>;
  output?: ReadonlyArray<FlaggedItemCount>;
  time: number;
};

export type RecipeDictionaryEntry = {
  name: string;
  recipes: ReadonlyArray<Recipe>;
};

export type Data = {
  recipeDictionaries: ReadonlyArray<RecipeDictionaryEntry>;
  items: ReadonlyArray<Item>;
};
