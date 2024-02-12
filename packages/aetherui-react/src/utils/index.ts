import { PartialTheme, ThemeVariables } from "../types/index";

export function convertToCSSVariables(
  obj: PartialTheme,
  prefix = "",
  ...emit: string[]
) {
  let cssVariables: ThemeVariables = {};
  for (const key in obj) {
    if (emit.includes(key)) {
      cssVariables = {
        ...cssVariables,
        ...convertToCSSVariables(
          obj[key as keyof PartialTheme] as unknown as PartialTheme,
          `${prefix}`,
          ...emit,
        ),
      };
    } else if (typeof obj[key as keyof PartialTheme] === "object") {
      cssVariables = {
        ...cssVariables,
        ...convertToCSSVariables(
          obj[key as keyof PartialTheme] as unknown as PartialTheme,
          `${prefix}${key}-`,
          ...emit,
        ),
      };
    } else {
      const cssVarName = `${prefix}${key}`
        .replace(/([A-Z])/g, "-$1")
        .toLowerCase();
      cssVariables[`--${cssVarName}`] = obj[key as keyof PartialTheme];
    }
  }

  return cssVariables;
}
