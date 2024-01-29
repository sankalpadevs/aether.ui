type TailwindClass<
  N extends string,
  S extends string,
  T extends string | undefined,
> = T extends string ? `${N}-${S}-${T}` : `${N}-${S}`;

export const generateTailwindClassWithoutTone = <
  N extends string,
  S extends string,
>(
  namespace: N,
  subNamespace: S,
) => {
  return `${namespace}-${subNamespace}` as TailwindClass<N, S, undefined>;
};

export const generateTailwindClassWithTone = <
  N extends string,
  S extends string,
  T extends string,
>(
  namespace: N,
  subNamespace: S,
  tone: T,
) => {
  return `${namespace}-${subNamespace}-${tone}` as TailwindClass<N, S, T>;
};

export type ThemeProperties = {
  color: {
    base: {
      1: string;
      5: string;
    };
    grayscale: {
      1: string;
      90: string;
      80: string;
      70: string;
      60: string;
      50: string;
      40: string;
      30: string;
      20: string;
      10: string;
      5: string;
    };
    text: {
      heading: string;
      bodyText: string;
      secondaryText: string;
      tertiaryText: string;
      disabledText: string;
    };
    primary: {
      "": string;
      text: string;
      50: string;
      10: string;
      contrast?: string;
    };
    error: {
      "": string;
      text: string;
      50: string;
      10: string;
      contrast?: string;
    };
    warning: {
      "": string;
      text: string;
      10: string;
      contrast?: string;
    };
    success: {
      "": string;
      text: string;
      50: string;
      10: string;
      contrast?: string;
    };
  };
  shadow: {
    xs: string;
    s: string;
    m: string;
    l: string;
    xl: string;
  };
  br: {
    s: string;
    m: string;
    l: string;
  };
};

export type Theme = {
  light: ThemeProperties;
  dark: ThemeProperties;
};

// type InferClassNameFromValues<Class extends TailwindClass<string, string, string | undefined>> = Class extends `${infer N}-${infer S}-${infer T}`
//     ? {
//         props: {
//             namespace: N;
//             subNamespace: S;
//             tone: T extends undefined ? undefined : T;
//         };
//         value: T extends undefined ? `${N}-${S}-${T}` : `${N}-${S}`;
//     }
//     : never;
