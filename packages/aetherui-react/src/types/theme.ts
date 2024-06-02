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
  base: string;
  sub: CustomColors[];
  primary: ColorWithContrast;
  error: ColorWithContrast;
  warning: ColorWithContrast;
  success: ColorWithContrast;
};

export type ThemeMode = {
  color: {
    bg: BackgroundColors;
    text: TextColors;
    user: CustomColors[];
  };
};

export type Theme =
  | ({
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
      };
    } & {
      mode: "light";
      light: ThemeMode;
    })
  | {
      mode: "dark";
      dark: ThemeMode;
    };
