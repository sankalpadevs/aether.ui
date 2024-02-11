import { Theme } from "../types/index";

export const aetheruiTheme: Theme = {
  light: {
    color: {
      base: {
        1: "#fff",
        5: "#F4F5F7",
      },
      grayscale: {
        1: "#192434",
        90: "#18273AF0",
        80: "#1A293DD4",
        70: "#1B2B41B0",
        60: "#1C2E4599",
        50: "#1C304A85",
        40: "#1C324F61",
        30: "#1C345442",
        20: "#1C375A29",
        10: "#1A38601A",
        5: "#193B670D",
      },
      text: {
        heading: "#192434",
        bodyText: "#192739F0",
        secondaryText: "#1B2B41B0",
        tertiaryText: "#1C304A85",
        disabledText: "#1C345442",
      },
      primary: {
        "": "#006AF5",
        text: "#005FDB",
        50: "#006CFAC2",
        10: "#338CFF21",
        contrast: "#FFFFFF",
      },
      error: {
        "": "#E21D12",
        text: "#CA150C",
        50: "#E71D1380",
        10: "#E71D131A",
        contrast: "#FFFFFF",
      },
      warning: {
        "": "#FFCC00",
        text: "#985211",
        10: "#FFCC0040",
        contrast: "#16202CE5",
      },
      success: {
        "": "#158444",
        text: "#0A7637",
        50: "#16884680",
        10: "#1688461A",
        contrast: "#FFFFFF",
      },
    },
    shadow: {
      xs: "0px 1px 4px -1px var(--aetherui-color-grayscale-30)",
      s: "0px 2px 4px -1px var(--aetherui-color-grayscale-10), 0px 3px 12px -1px var(--aetherui-color-grayscale-20)",
      m: "0px 2px 6px -1px var(--aetherui-color-grayscale-10), 0px 8px 24px -4px var(--aetherui-color-grayscale-20)",
      l: "0px 3px 18px -2px var(--aetherui-color-grayscale-10), 0px 12px 48px -6px var(--aetherui-color-grayscale-20)",
      xl: "0px 4px 24px -3px var(--aetherui-color-grayscale-10), 0px 18px 64px -8px var(--aetherui-color-grayscale-20)",
    },
    br: {
      s: "0.25rem",
      m: "0.25rem",
      l: "0.5rem",
    },
  },
  dark: {
    color: {
      base: {
        1: "#223348",
        5: "#2B3D52",
      },
      grayscale: {
        1: "#F5F9FF",
        90: "#EBF4FFE5",
        80: "#E2EEFECC",
        70: "#D9E8FCB0",
        60: "#D1E3FA94",
        50: "#C9DDF880",
        40: "#C1D8F569",
        30: "#BAD2F252",
        20: "#B4CDEE3B",
        10: "#ADC8EB24",
        5: "#C0D5F20F",
      },
      text: {
        heading: "#F5F9FF",
        bodyText: "#EBF4FFE5",
        secondaryText: "#D9E8FCB0",
        tertiaryText: "#C9DDF880",
        disabledText: "#BAD2F252",
      },
      primary: {
        "": "#0C6CE9",
        text: "#90BDF9",
        50: "#6DA9F8C2",
        10: "#338CFF21",
      },
      error: {
        "": "#E0241A",
        text: "#FF9E99",
        50: "#FF9E99",
        10: "#E75D5524",
      },
      warning: {
        "": "#F5AF00",
        text: "#FECB45",
        10: "#FFAA0033",
      },
      success: {
        "": "#158444",
        text: "#12D965",
        50: "#0FF56F80",
        10: "#0FF56F1A",
      },
    },
    shadow: {
      xs: "0px 1px 4px -1px var(--aetherui-color-grayscale-30)",
      s: "0px 2px 4px -1px var(--aetherui-color-grayscale-10), 0px 3px 12px -1px var(--aetherui-color-grayscale-20)",
      m: "0px 2px 6px -1px var(--aetherui-color-grayscale-10), 0px 8px 24px -4px var(--aetherui-color-grayscale-20)",
      l: "0px 3px 18px -2px var(--aetherui-color-grayscale-10), 0px 12px 48px -6px var(--aetherui-color-grayscale-20)",
      xl: "0px 4px 24px -3px var(--aetherui-color-grayscale-10), 0px 18px 64px -8px var(--aetherui-color-grayscale-20)",
    },
    br: {
      s: "0.25rem",
      m: "0.25rem",
      l: "0.5rem",
    },
  },
};
