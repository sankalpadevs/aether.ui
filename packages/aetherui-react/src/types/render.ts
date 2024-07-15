import React, { Children, Ref } from "react";

import { Anything } from "./helpers";

/**
 * Type used on components which have displayName or in other words, is exported as ForwardedRefComponent
 */
export type HasDisplayName = {
  displayName: string;
};

/**
 * This type checks if the provided function type is a valid ForwardedRefComponent and provides ref key else `never`
 */
export type RefProp<
  T extends (props: Anything, ref: Ref<Anything>) => Anything,
> = T extends (props: Anything, ref: Ref<infer RefType>) => Anything
  ? { ref?: Ref<RefType> }
  : never;

/**
 * This type uses `HTMLElementTagNameMap` to fetch the corresponding HTML entity to the provided `JSXIntrinsicElements`
 * For eg: ExtractElemRef<"div"> = HTMLDivElement
 */
export type ExtractElemRef<T> = T extends keyof HTMLElementTagNameMap
  ? HTMLElementTagNameMap[T]
  : HTMLElement;

export type JSXElements = keyof React.JSX.IntrinsicElements;

export type Children = React.ReactNode | React.ReactNode[];

/**
 * This type is used to conditionally allow passing `children` as prop
 */
export type ChildrenRequired<TChildrenRequired> = TChildrenRequired extends true
  ? {
      children: Children;
    }
  : {
      children?: Children;
    };

/**
 * These are the component props that we control. They are sent to each and every component we provide.
 */
export type PropsControlled<
  TElems extends JSXElements,
  TChildrenRequired extends boolean = true,
> = {
  as?: TElems;
  className?: string;
} & ChildrenRequired<TChildrenRequired>;

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
