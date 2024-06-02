import React, { HTMLProps } from "react";

export type GenericComponentProps = {
  children: React.ReactNode | React.ReactNode[];
  overrideClassName?: string;
  as?: React.ElementType;
  noPadding?: boolean;
  noMargin?: boolean;
} & HTMLProps<any>;

export type LayoutComponentProps = {
  children: React.ReactNode | React.ReactNode[];
  as?: React.ElementType;
  overrideClassName?: string;
  noPadding?: boolean;
  noMargin?: boolean;
} & HTMLProps<any>;

export type TypographyProps = {
  children: React.ReactNode;
  className?: string;
  variant?: React.ElementType;
};
