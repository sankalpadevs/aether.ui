import React, { useContext, createContext } from "react";

import { Theme } from "../types/theme";

import { registerTheme } from "../utils/common";

import { aetheruiTheme } from "../constants/theme";

const ThemeContext = createContext<{
  theme: Theme;
}>({
  theme: aetheruiTheme,
});
ThemeContext.displayName = "ThemeContext";

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const root = document.body;

  registerTheme(aetheruiTheme, root);

  return (
    <ThemeContext.Provider value={{ theme: aetheruiTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    console.warn(
      "No ThemeProvider found for aetherui-react; using default theme.",
    );
    return {
      theme: aetheruiTheme,
    };
  }
  return context;
};
