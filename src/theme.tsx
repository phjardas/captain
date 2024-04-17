import "@fontsource/roboto";
import {
  CssBaseline,
  ThemeProvider as MuiThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material";
import { deepOrange } from "@mui/material/colors/index.js";
import { type ReactNode } from "react";

const theme = responsiveFontSizes(
  createTheme({
    palette: {
      mode: "dark",
      primary: deepOrange,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none",
          },
        },
      },
    },
  })
);

function ThemeWrapper({ children }: { children?: ReactNode }) {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <ThemeWrapper>
      <CssBaseline />
      {children}
    </ThemeWrapper>
  );
}
