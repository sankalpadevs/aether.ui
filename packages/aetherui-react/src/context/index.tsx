import React, { useContext, useState, createContext } from "react";
import { aetheruiTheme } from "../constants/theme";
import { Theme } from "../types/index";

const ThemeContext = createContext<{
  theme: Theme;
  updateTheme: (newTheme: Theme) => void;
}>({
  theme: aetheruiTheme,
  updateTheme: () => {
    return;
  },
});
ThemeContext.displayName = "ThemeContext";

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [customTheme, setCustomTheme] = useState(aetheruiTheme);

  const updateTheme = (newTheme: Theme) => {
    setCustomTheme({ ...customTheme, ...newTheme });
  };

  return (
    <ThemeContext.Provider value={{ theme: customTheme, updateTheme }}>
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
      updateTheme: () => {
        return;
      },
    };
  }
  return context;
};
