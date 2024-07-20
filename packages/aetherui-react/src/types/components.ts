import React from "react";

import { ComponentProps, JSXElements } from "./render";
import { Anything } from "./helpers";

// ************************** BUTTON **************************

type ButtonTypes = "default" | "primary" | "tertiary";

type ButtonVariants = "default" | "error" | "success" | "contrast";

type TButton = {
  type?: ButtonTypes;
  variant?: ButtonVariants;
  iconOnly?: boolean;
  icon?: React.ReactNode;
  placeIcon?: "start" | "end";
};

export type ButtonProps<TElem extends JSXElements> = ComponentProps<
  TElem,
  false,
  TButton
>;

// ************************** LAYOUT **************************

export type TGeneric = {
  overrideClassName?: string;
  noPadding?: boolean;
  noMargin?: boolean;
};

export type GenericComponentProps<TElem extends JSXElements> = ComponentProps<
  TElem,
  true,
  TGeneric
>;

type _TGrid = {
  flow?: "column" | "row";
} & TGeneric;

export type GridProps<TElem extends JSXElements> = ComponentProps<
  TElem,
  true,
  _TGrid
>;

// ************************** TYPOGRAPHY **************************

type _TTypography = {
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  color?: string;
};

export type TypographyProps<TElem extends JSXElements> = ComponentProps<
  TElem,
  true,
  _TTypography
>;

// ************************** FORM **************************

type _TextInputProps = {
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  helper?: React.ReactNode;
  errorText?: React.ReactNode;
  requiredText?: React.ReactNode;
  matcher?: RegExp;
  format?: RegExp;
  clearText?: boolean;
  replacer?: string | ((substring: string, ...args: any[]) => string);
  textAlign?: "left" | "center" | "right";
  error?: boolean;
  label?: string;
  variant?: "base" | "dotted";
  showCopy?: boolean;
  copyText?: string;
};

export type DEFAULT_INPUT_TAG = "input";

export type TextInputProps = ComponentProps<
  DEFAULT_INPUT_TAG,
  false,
  _TextInputProps
>;

type _NumberInputProps = {
  defaultValue?: number;
  max?: number;
  min?: number;
  counter?: number;
  controlButtons?: boolean;
  helper?: React.ReactNode;
  errorText?: React.ReactNode;
  requiredText?: React.ReactNode;
  matcher?: RegExp;
  format?: RegExp;
  replacer?: string | ((substring: string, ...args: any[]) => string);
  textAlign?: "left" | "center" | "right";
  error?: boolean;
  label?: string;
  variant?: "base" | "dotted";
};

export type NumberInputProps = ComponentProps<
  DEFAULT_INPUT_TAG,
  false,
  _NumberInputProps
>;

type _PasswordInputProps = {
  strengthCriteria?: RegExp[];
  showStrength?: boolean;
  matcher?: RegExp;
  helper?: React.ReactNode;
  errorText?: React.ReactNode;
  requiredText?: React.ReactNode;
  error?: boolean;
  label?: string;
};

export type PasswordInputProps = ComponentProps<
  DEFAULT_INPUT_TAG,
  false,
  _PasswordInputProps
>;

type _TextAreaProps = {
  showCount?: boolean;
  helper?: React.ReactNode;
  errorText?: React.ReactNode;
  requiredText?: React.ReactNode;
  textAlign?: "left" | "center" | "right";
  error?: boolean;
  label?: string;
  variant?: "base" | "dotted";
};

export type DEFAULT_TEXTAREA_TAG = "textarea";

export type TextAreaProps = ComponentProps<
  DEFAULT_TEXTAREA_TAG,
  false,
  _TextAreaProps
>;

type _CheckboxProps = {
  label?: React.ReactNode;
  helper?: React.ReactNode;
  errorText?: React.ReactNode;
  requiredText?: React.ReactNode;
  error?: boolean;
};

export type CheckboxProps = ComponentProps<
  DEFAULT_INPUT_TAG,
  false,
  _CheckboxProps
>;

// ************************** ICONS **************************

export type DEFAULT_ICON_TAG = "svg";

export type IconProps = ComponentProps<DEFAULT_ICON_TAG, false>;

// ************************** NOTIFICATION **************************

export type TNotificationVariant = "banner" | "alert";

export type TNotificationBase = {
  type?: "default" | "primary" | "success" | "error" | "warning";
  title: React.ReactNode;
  description?: React.ReactNode;
  onUnmount?: () => Anything;
};

export type TNotificationWithCategory = TNotificationBase & {
  category: string;
};

export type TNotificationWithIconAndVariant = TNotificationBase & {
  category?: string;
  icon?: React.ReactNode;
  variant?: TNotificationVariant;
};

export type TNotification = ComponentProps<
  "div",
  false,
  TNotificationWithCategory | TNotificationWithIconAndVariant
>;
