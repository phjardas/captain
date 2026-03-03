import Router from "./Router.js";
import AuthenticationProvider from "./auth/provider.js";
import GameProvider from "./game/provider.js";
import StorageProvider from "./storage/provider.js";
import ThemeColorProvider from "./theme/color-provider.js";
import ThemeProvider from "./theme/mui.js";

export default function App() {
  return (
    <ThemeColorProvider>
      <ThemeProvider>
        <AuthenticationProvider>
          <GameProvider>
            <StorageProvider>
              <Router />
            </StorageProvider>
          </GameProvider>
        </AuthenticationProvider>
      </ThemeProvider>
    </ThemeColorProvider>
  );
}
