import "@fontsource/roboto";
import {
  CssBaseline,
  ThemeProvider as MuiThemeProvider,
  createTheme,
  responsiveFontSizes,
  useMediaQuery,
} from "@mui/material";
import { blueGrey as primary } from "@mui/material/colors/index.js";
import { useMemo, type ReactNode } from "react";

function useMuiTheme() {
  const darkMode = useMediaQuery("(prefers-color-scheme: dark)");

  return useMemo(
    () =>
      responsiveFontSizes(
        createTheme({
          palette: {
            mode: darkMode ? "dark" : "light",
            primary,
            background: { default: darkMode ? "#000" : primary[50] },
          },
          shape: {
            borderRadius: 0,
          },
          components: {
            MuiButton: {
              styleOverrides: {
                root: {
                  textTransform: "none",
                },
                contained: {
                  boxShadow: "none",
                },
              },
            },
            MuiCard: {
              styleOverrides: {
                root: {
                  boxShadow: "none",
                },
              },
            },
          },
        })
      ),
    [darkMode]
  );
}

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const theme = useMuiTheme();

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}
