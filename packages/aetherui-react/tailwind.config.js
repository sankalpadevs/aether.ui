import { aetheruiTheme } from "./src/constants/theme.ts";
import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  corePlugins: {
    preflight: false,
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: "var(--aetherui-font-base)",
      },
      colors: {
        heading: "var(--aetherui-color-text-heading)",
        bodyText: "var(--aetherui-color-text-bodyText)",
        secondaryText: "var(--aetherui-color-text-secondaryText)",
        tertiaryText: "var(--aetherui-color-text-tertiaryText)",
        disabledText: "var(--aetherui-color-text-disabledText)",
        "grayscale-100": "var(--aetherui-color-grayscale-100)",
        "grayscale-90": "var(--aetherui-color-grayscale-90)",
        "grayscale-80": "var(--aetherui-color-grayscale-80)",
        "grayscale-70": "var(--aetherui-color-grayscale-70)",
        "grayscale-60": "var(--aetherui-color-grayscale-60)",
        "grayscale-50": "var(--aetherui-color-grayscale-50)",
        "grayscale-40": "var(--aetherui-color-grayscale-40)",
        "grayscale-30": "var(--aetherui-color-grayscale-30)",
        "grayscale-20": "var(--aetherui-color-grayscale-20)",
        "grayscale-10": "var(--aetherui-color-grayscale-10)",
        "grayscale-5": "var(--aetherui-color-grayscale-5)",
        primary: "var(--aetherui-color-primary)",
        "primary-text": "var(--aetherui-color-primary-text)",
        "primary-50": "var(--aetherui-color-primary-50)",
        "primary-10": "var(--aetherui-color-primary-10)",
        "primary-contrast": "var(--aetherui-color-primary-contrast)",
        error: "var(--aetherui-color-error)",
        "error-text": "var(--aetherui-color-error-text)",
        "error-50": "var(--aetherui-color-error-50)",
        "error-10": "var(--aetherui-color-error-10)",
        "error-contrast": "var(--aetherui-color-error-contrast)",
        warning: "var(--aetherui-color-warning)",
        "warning-text": "var(--aetherui-color-warning-text)",
        "warning-10": "var(--aetherui-color-warning-10)",
        "warning-contrast": "var(--aetherui-color-warning-contrast)",
        success: "var(--aetherui-color-success)",
        "success-text": "var(--aetherui-color-success-text)",
        "success-50": "var(--aetherui-color-success-50)",
        "success-10": "var(--aetherui-color-success-10)",
        "success-contrast": "var(--aetherui-color-success-contrast)",
        "base-1": "var(--aetherui-color-base-1)",
        "base-5": "var(--aetherui-color-base-5)",
      },
      boxShadow: {
        xs: "var(--aetherui-shadow-xs)",
        s: "var(--aetherui-shadow-s)",
        m: "var(--aetherui-shadow-m)",
        l: "var(--aetherui-shadow-l)",
        xl: "var(--aetherui-shadow-xl)",
      },
      borderRadius: {
        sm: "var(--aetherui-br-s)",
        md: "var(--aetherui-br-m)",
        lg: "var(--aetherui-br-l)",
      },
      variables: {
        // ------------------ IMPORTANT -------------------
        // | These defaults are set in the :root.To ensure |
        // | the variable names does not override aetherui |
        // | is added as prefix.                           |
        // ------------------------------------------------
        DEFAULT: {
          ...aetheruiTheme.light,
          font: {
            base: ['"Inter"', ...defaultTheme.fontFamily.sans],
          },
        },
      },
      darkVariables: {
        // ------------------ IMPORTANT -------------------
        // | These defaults are set in the :root and dark  |
        // | mode.To ensure the variable names does not    |
        // | override aetherui is added as prefix.         |
        // ------------------------------------------------
        DEFAULT: {
          ...aetheruiTheme.dark,
          font: {
            base: ['"Inter"', ...defaultTheme.fontFamily.sans],
          },
        },
      },
    },
  },
  plugins: [
    require("@mertasan/tailwindcss-variables")({
      variablePrefix: "aetherui",
    }),
  ],
  prefix: "aetherui-",
};
