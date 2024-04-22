export type DataLoading = { state: "loading" };
export type DataReady<TData> = { state: "ready"; data: TData };
export type DataError = { state: "error"; error: Error };
export type DataState<TData> = DataLoading | DataReady<TData> | DataError;

export function getErrors(
  ...states: ReadonlyArray<DataState<unknown>>
): ReadonlyArray<Error> {
  return states
    .filter((state): state is DataError => state.state === "error")
    .map((state) => state.error);
}

export function isLoading(
  ...states: ReadonlyArray<DataState<unknown>>
): boolean {
  return states.some((state) => state.state === "loading");
}
