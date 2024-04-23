import { createContext, useCallback, useContext } from "react";

export const defaultColor = "#8a5100";

export const ThemeColorContext = createContext<{
  color: string | number;
  setColor: (color: string | number) => void;
}>({
  color: defaultColor,
  setColor: () => {
    throw new Error("Missing theme color context");
  },
});

export function useThemeColor(): string | number {
  return useContext(ThemeColorContext).color;
}

export function useSetThemeColor(): (
  color: string | number | undefined
) => void {
  const { setColor } = useContext(ThemeColorContext);
  return useCallback((color) => setColor(color ?? defaultColor), [setColor]);
}
