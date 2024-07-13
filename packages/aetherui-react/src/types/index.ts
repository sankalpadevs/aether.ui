import React from "react";

export * from "./theme";
export * from "./layout";
export * from "./form";
export * from "./button";
export * from "./notification";
export * from "./icons";

export type JSXElements =
  | keyof React.JSX.IntrinsicElements
  | React.JSXElementConstructor<any>;

export type Children = React.ReactNode | React.ReactNode[];

/**
 * These are the component props that we control. They are sent to each and every component we provide.
 */
export type PropsControlled<
  TElems extends JSXElements,
  TChildrenRequired extends boolean = true,
> = {
  as?: TElems;
  children: TChildrenRequired extends true ? Children : Children | undefined;
  className?: string;
};

/**
 * These props are intrinsic props of HTML Elements which are filtered on the basis of Generic Type `TElem`
 */
export type IntrinsicProps<TElem extends JSXElements> =
  TElem extends React.ElementType
    ? Omit<React.ComponentProps<TElem>, "ref">
    : never;

/**
 * These are props that are sanitized.
 */
export type SanitizedProps<
  TElems extends JSXElements,
  TOmittableProps extends PropertyKey = never,
> = Omit<
  IntrinsicProps<TElems>,
  TOmittableProps | keyof PropsControlled<TElems>
>;

export type ComponentProps<
  TElems extends JSXElements,
  TChildrenRequired extends boolean = true,
  Overrides = object,
  TOmittableProps extends PropertyKey = never,
> = SanitizedProps<TElems, TOmittableProps | keyof Overrides> &
  PropsControlled<TElems, TChildrenRequired> &
  Overrides;
