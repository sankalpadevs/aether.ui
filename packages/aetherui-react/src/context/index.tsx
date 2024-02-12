import React, { useContext, useState, createContext } from "react";
import { aetheruiTheme } from "../constants/theme";
import { PartialTheme, Theme } from "../types/index";
import { convertToCSSVariables } from "../utils/index";

const ThemeContext = createContext<{
  theme: Theme;
  updateTheme: (newTheme: PartialTheme) => void;
}>({
  theme: aetheruiTheme,
  updateTheme: () => {
    return;
  },
});
ThemeContext.displayName = "ThemeContext";

export const ThemeProvider = ({
  children,
  providedTheme,
}: {
  children: React.ReactNode;
  providedTheme?: Theme;
}) => {
  const [customTheme, setCustomTheme] = useState(
    providedTheme ?? aetheruiTheme,
  );

  const updateTheme = (newTheme: PartialTheme) => {
    console.log(convertToCSSVariables(newTheme, "aetherui-", "light", "dark"));
    setCustomTheme({ ...customTheme, ...(newTheme as Theme) });
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
