import React from "react";

export type InputProps = {
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
} & React.ComponentProps<"input">;

export type NumberInputProps = {
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
} & React.ComponentProps<"input">;

export type TextAreaProps = {
  showCount?: boolean;
  helper?: React.ReactNode;
  errorText?: React.ReactNode;
  requiredText?: React.ReactNode;
  textAlign?: "left" | "center" | "right";
  error?: boolean;
  label?: string;
  variant?: "base" | "dotted";
} & React.ComponentProps<"textarea">;

export type PasswordInputProps = {
  strengthCriteria?: RegExp[];
  showStrength?: boolean;
  matcher?: RegExp;
  helper?: React.ReactNode;
  errorText?: React.ReactNode;
  requiredText?: React.ReactNode;
  error?: boolean;
  label?: string;
} & React.ComponentProps<"input">;

export type CheckboxProps = {
  label?: React.ReactNode;
  helper?: React.ReactNode;
  errorText?: React.ReactNode;
  requiredText?: React.ReactNode;
  error?: boolean;
} & React.ComponentProps<"input">;
