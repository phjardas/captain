import "@fontsource/roboto";
import {
  CssBaseline,
  ThemeProvider as MuiThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material";
import { indigo, pink } from "@mui/material/colors";
import { type ReactNode } from "react";

const theme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: indigo,
      secondary: pink,
      background: {
        default: "#f5f5f5",
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none",
          },
        },
      },
      MuiTab: {
        styleOverrides: {
          root: {
            textTransform: "initial",
            fontSize: "1rem",
          },
        },
      },
      MuiFormControl: {
        defaultProps: {
          fullWidth: true,
        },
      },
      MuiTextField: {
        defaultProps: {
          fullWidth: true,
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
