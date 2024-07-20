import { Theme, TypographyT } from "../types/theme";

export const emitKeys = ["notificationCategories"];

/**
 * Generate a `Typography` type
 * @param weight
 * @param size
 * @param lineHeight
 * @param letterSpacing
 */
export const generateTypography = (
  weight: number,
  size: string,
  lineHeight: string,
  letterSpacing: string,
): TypographyT => {
  return { weight, size, letterSpacing, lineHeight };
};

/**
 * Generates a CSS-Equivalent of a drop-shadow
 * @param x
 * @param y
 * @param blur
 * @param spread
 * @param color
 */
export const generateShadow = (
  x: number,
  y: number,
  blur: number,
  spread: number,
  color: string,
): string => {
  return `${x}px ${y}px ${blur}px ${spread}px ${color}`;
};

/**
 * Generates classes using props, filtering all the undefined, null and other falsy types
 * @param classes
 */
export const cbnCls = (...classes: any[]) =>
  classes.filter((cls) => !!cls).join(" ");

/**
 * Registers theme provided to the root
 * @param obj
 * @param root
 * @param variableName
 */
export const registerTheme = (
  obj: Theme,
  root: HTMLElement,
  variableName = "--aetherui",
) => {
  for (const key in obj) {
    const child = obj[key as keyof typeof obj] as any;
    const updatedKey = variableName + `${key ? `-${key}` : ""}`;
    if (emitKeys.includes(key)) continue;
    if (key === "light" || key === "dark")
      registerTheme(child, root, variableName);
    else {
      if (typeof child === "string" || typeof child === "number") {
        if (root) root.style.setProperty(updatedKey, `${child}`);
      } else if (Array.isArray(child)) {
        child.forEach((sub: any) => {
          registerTheme(sub.value, root, updatedKey + `-${sub.name}`);
        });
      } else if (typeof child === "object") {
        registerTheme(child, root, updatedKey);
      }
    }
  }
};

/**
 * It takes text and regexp to test if the input matches the provided regexp.
 * Returns *boolean*
 * @param inputText
 * @param pattern
 */
export const matchPattern = (inputText: string, pattern: RegExp) => {
  return pattern.test(inputText);
};
