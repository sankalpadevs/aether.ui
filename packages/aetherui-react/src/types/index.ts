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

export type Theme = {
  textColor: {
    primary: string;
    secondary: string;
  };
  backgroundColor: {
    primary: string;
    secondary: string;
  };
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
