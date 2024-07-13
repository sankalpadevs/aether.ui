import React from "react";
import { ComponentProps } from "./index";

export type GenericProps = {
  overrideClassName?: string;
  noPadding?: boolean;
  noMargin?: boolean;
};

export type GenericComponentProps = ComponentProps<any, true, GenericProps>;

export type TypographyProps = {
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  color?: string;
};
