import React, { HTMLProps } from "react";

export type ButtonTypes = "default" | "primary" | "tertiary";

export type ButtonVariants = "default" | "error" | "success" | "contrast";

export type TButton = {
  type?: ButtonTypes;
  variant?: ButtonVariants;
  iconOnly?: boolean;
  icon?: React.ReactNode;
  placeIcon?: "start" | "end";
};

export type ButtonProps = TButton & {
  children?: React.ReactNode;
} & HTMLProps<HTMLButtonElement>;
