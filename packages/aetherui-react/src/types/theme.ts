import React from "react";

import { TNotificationVariant } from "./components";

export type ComponentTheme = {
  colors?: {
    bg?: {
      [k: string]: string;
    };
    text?: {
      [k: string]: string;
    };
  };
  border?: {
    [k: string]: {
      width: string;
      style:
        | "dotted"
        | "dashed"
        | "solid"
        | "double"
        | "groove"
        | "ridge"
        | "inset"
        | "outset"
        | "none"
        | "hidden";
      color: string;
    };
  };
  "border-radius"?: {
    [k: string]: string;
  };
  height?: {
    [k: string]: string;
  };
  width?: {
    [k: string]: string;
  };
};

export type TypographyT = {
  weight: number;
  size: string;
  lineHeight: string;
  letterSpacing: string;
};

export type ColorWithContrast = {
  "": string;
  contrast: string;
};

export type CustomColors = {
  name: string;
  value: ColorWithContrast;
};

export type TextColors = {
  heading: string;
  body: string;
  secondary: string;
  tertiary: string;
  disabled: string;
  primary: string;
  error: string;
  warning: string;
  success: string;
};

export type BackgroundColors = {
  base: {
    [k: string]: string;
  };
  sub: CustomColors[];
  primary: ColorWithContrast;
  error: ColorWithContrast & {
    [k: string]: string;
  };
  warning: ColorWithContrast;
  success: ColorWithContrast;
};

export type ThemeMode = {
  color: {
    bg: BackgroundColors;
    text: TextColors;
    user: CustomColors[];
  };
  components?: {
    [K: string]: ComponentTheme;
  };
};

export type NotificationCategory = {
  id: string;
  label: string;
  icon: React.ReactNode;
  variant: TNotificationVariant;
};

export type Theme = {
  typography: {
    h1: TypographyT;
    h2: TypographyT;
    h3: TypographyT;
    h4: TypographyT;
    h5: TypographyT;
    h6: TypographyT;
    default: TypographyT;
    xs: TypographyT;
    xxs: TypographyT;
  };
  shadows: {
    xs: string;
    s: string;
    m: string;
    l: string;
    xl: string;
  };
  radius: {
    s: string;
    m: string;
    l: string;
  };
  common: {
    color: {
      [k: string]: string;
    };
    notification: {
      wrapOffset: number;
      position:
        | "top-left"
        | "top-right"
        | "bottom-left"
        | "bottom-right"
        | "top-center"
        | "bottom-center"
        | "middle-left"
        | "middle-right"
        | "center";
      margin: string;
      width: string;
      "border-radius": string;
      disappearTime: number;
    };
    notificationCategories: NotificationCategory[];
  };
} & (
  | {
      mode: "light";
      light: ThemeMode;
    }
  | {
      mode: "dark";
      dark: ThemeMode;
    }
);
