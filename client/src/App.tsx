import React from "react";
import { ThemeProvider } from "./comp/provider/theme-provider";
import LoginPage from "./comp/loginPage/loginPage";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/touter";

function App() {
  return (
    <div>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem={false}
        storageKey="discord-theme"
        disableTransitionOnChange
      >
        <RouterProvider router={router} />
      </ThemeProvider>
    </div>
  );
}

export default App;
