import "@fontsource/roboto";
import {
  argbFromHex,
  hexFromArgb,
  themeFromSourceColor,
  type Theme as MaterialTheme,
} from "@material/material-color-utilities";
import { CssBaseline, useMediaQuery } from "@mui/material";
import {
  Experimental_CssVarsProvider as CssVarsProvider,
  experimental_extendTheme as extendTheme,
  useColorScheme,
} from "@mui/material/styles";
import { useEffect, useMemo, type ReactNode } from "react";
import { useThemeColor } from "./color.js";

function useMuiTheme() {
  const color = useThemeColor();

  return useMemo(() => {
    const theme = themeFromSourceColor(
      typeof color === "string" ? argbFromHex(color) : color
    );

    return extendTheme({
      colorSchemes: {
        light: createColorScheme(theme, "light"),
        dark: createColorScheme(theme, "dark"),
      },
      shape: {
        borderRadius: 20,
      },
      components: {
        MuiAppBar: {
          styleOverrides: {
            colorPrimary: {
              "--AppBar-background": "var(--mui-palette-md-surface-variant)",
              "--AppBar-color": "var(--mui-palette-md-on-surface-variant)",
            },
          },
        },
        MuiButton: {
          defaultProps: {
            disableElevation: true,
          },
          styleOverrides: {
            root: {
              textTransform: "none",
              padding: "0 24px",
              minHeight: 40,
            },
            containedPrimary: {
              backgroundColor: "var(--mui-palette-md-primary)",
              color: "var(--mui-palette-md-on-primary)",
            },
            containedSecondary: {
              backgroundColor: "var(--mui-palette-md-secondary)",
              color: "var(--mui-palette-md-on-secondary)",
            },
          },
        },
        MuiCard: {
          defaultProps: {
            elevation: 0,
          },
          styleOverrides: {
            root: {
              color: "var(--mui-palette-md-on-primary-container)",
            },
          },
        },
        MuiDialog: {
          styleOverrides: {
            paper: {
              "--mui-palette-background-paper": "var(--mui-palette-md-surface)",
            },
          },
        },
        MuiPopover: {
          styleOverrides: {
            root: {
              ".MuiPaper-root": {
                backgroundColor: "var(--mui-palette-md-surface)",
              },
            },
          },
        },
      },
    });
  }, [color]);
}

function createColorScheme(theme: MaterialTheme, mode: "light" | "dark") {
  const scheme = theme.schemes[mode];

  return {
    palette: {
      md: Object.fromEntries(
        Object.entries(scheme.toJSON()).map(([key, value]) => {
          const token = key.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
          const color = hexFromArgb(value);
          return [token, color];
        })
      ),
      primary: { main: hexFromArgb(scheme.primary) },
      secondary: { main: hexFromArgb(scheme.secondary) },
      success: { main: hexFromArgb(scheme.tertiary) },
      error: { main: hexFromArgb(scheme.error) },
      background: {
        default: hexFromArgb(
          theme.palettes.neutral.tone(mode === "light" ? 95 : 0)
        ),
        paper: hexFromArgb(
          theme.palettes.neutral.tone(mode === "light" ? 98 : 5)
        ),
      },
      text: {
        primary: hexFromArgb(scheme.onSurface),
        secondary: hexFromArgb(scheme.onSurfaceVariant),
      },
    },
  };
}

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const theme = useMuiTheme();

  return (
    <CssVarsProvider theme={theme}>
      <CssBaseline />
      <ModeSwitcher />
      {children}
    </CssVarsProvider>
  );
}

function ModeSwitcher() {
  const { setMode } = useColorScheme();
  const darkMode = useMediaQuery("(prefers-color-scheme: dark)");
  useEffect(() => setMode(darkMode ? "dark" : "light"), [darkMode, setMode]);
  return null;
}
