import { Theme, ThemeMode } from "../types/theme";

import { generateShadow, generateTypography } from "../utils/common";

export const lightTheme: ThemeMode = {
  color: {
    bg: {
      base: {
        "": "#ffffff",
        contrast5: "#F4F5F7",
      },
      sub: [
        {
          name: "contrast100",
          value: {
            "": "#192434",
            contrast: "",
          },
        },
        {
          name: "contrast30",
          value: {
            "": "#1C345442",
            contrast: "",
          },
        },
        {
          name: "contrast30",
          value: {
            "": "#1C375A29",
            contrast: "",
          },
        },
        {
          name: "contrast10",
          value: {
            "": "#1A386019",
            contrast: "",
          },
        },
        {
          name: "contrast5",
          value: {
            "": "#193B670D",
            contrast: "",
          },
        },
      ],
      primary: {
        "": "#006AF5",
        contrast: "#FFFFFF",
      },
      error: {
        "": "#E21D12",
        contrast: "#FFFFFF",
        "10": "#E21D121A",
      },
      warning: {
        "": "#FFCC00",
        contrast: "#182739",
      },
      success: {
        "": "#158444",
        contrast: "#FFFFFF",
      },
    },
    text: {
      heading: "#192434",
      body: "#192739",
      secondary: "#1B2B41B0",
      tertiary: "#1C304A85",
      disabled: "#1C345442",
      primary: "#005FDB",
      error: "#CA150C",
      warning: "#985211",
      success: "#0A7637",
    },
    user: [],
  },
  components: {
    TextInput: {
      colors: {
        bg: {
          base: "#1A38601A",
          dotted: "#FFF",
        },
      },
      border: {
        base: {
          width: "0px",
          color: "#1C304A",
          style: "solid",
        },
        dotted: {
          width: "1px",
          color: "#1C34544D",
          style: "dashed",
        },
      },
      height: {
        base: "40px",
        dotted: "40px",
      },
      width: {
        "": "150px",
      },
    },
    NumberInput: {
      colors: {
        bg: {
          base: "#1A38601A",
          dotted: "#FFF",
        },
      },
      border: {
        base: {
          width: "0px",
          color: "#1C304A",
          style: "solid",
        },
        dotted: {
          width: "1px",
          color: "#1C34544D",
          style: "dashed",
        },
      },
      height: {
        base: "40px",
        dotted: "40px",
      },
      width: {
        "": "100px",
      },
    },
    TextArea: {
      colors: {
        bg: {
          base: "#1A38601A",
          dotted: "#FFF",
        },
      },
      border: {
        base: {
          width: "0px",
          color: "#1C304A",
          style: "solid",
        },
        dotted: {
          width: "1px",
          color: "#1C34544D",
          style: "dashed",
        },
      },
      height: {
        base: "40px",
        dotted: "40px",
      },
      width: {
        "": "100px",
      },
    },
    PasswordInput: {
      colors: {
        bg: {
          "": "#1A38601A",
        },
      },
      border: {
        "": {
          width: "0px",
          color: "#1C304A",
          style: "solid",
        },
      },
      height: {
        "": "40px",
      },
      width: {
        "": "150px",
      },
    },
  },
};
export const darkTheme: ThemeMode = {
  color: {
    bg: {
      base: {
        "": "#223348",
        contrast5: "#2B3D52",
      },
      sub: [
        {
          name: "contrast100",
          value: {
            "": "#F5F9FF",
            contrast: "",
          },
        },
      ],
      primary: {
        "": "#0C6CE9",
        contrast: "#FFFFFF",
      },
      error: {
        "": "#E0241A",
        contrast: "#FFFFFF",
        "10": "#E0241A1A",
      },
      warning: {
        "": "#F5AF00",
        contrast: "#16202C",
      },
      success: {
        "": "#158444",
        contrast: "#FFFFFF",
      },
    },
    text: {
      heading: "#F5F9FF",
      body: "#EBF4FF",
      secondary: "#D9E8FC",
      tertiary: "#C9DDF8",
      disabled: "#BAD2F252",
      primary: "#90BDF9",
      error: "#FF9E99",
      warning: "#FECB45",
      success: "#12D965",
    },
    user: [],
  },
  components: {
    TextInput: {
      colors: {
        bg: {
          base: "rgba(26,56,96,0.1)",
          dotted: "transparent",
        },
      },
      border: {
        base: {
          width: "0px",
          color: "#1C304A",
          style: "solid",
        },
        dotted: {
          width: "1px",
          color: "#1C34544D",
          style: "dashed",
        },
      },
      height: {
        base: "40px",
        dotted: "40px",
      },
      width: {
        "": "150px",
      },
    },
    NumberInput: {
      colors: {
        bg: {
          base: "#1A38601A",
          dotted: "#FFF",
        },
      },
      border: {
        base: {
          width: "0px",
          color: "#1C304A",
          style: "solid",
        },
        dotted: {
          width: "1px",
          color: "#1C34544D",
          style: "dashed",
        },
      },
      height: {
        base: "40px",
        dotted: "40px",
      },
      width: {
        "": "100px",
      },
    },
    TextArea: {
      colors: {
        bg: {
          base: "#1A38601A",
          dotted: "#FFF",
        },
      },
      border: {
        base: {
          width: "0px",
          color: "#1C304A",
          style: "solid",
        },
        dotted: {
          width: "1px",
          color: "#1C34544D",
          style: "dashed",
        },
      },
      height: {
        base: "40px",
        dotted: "40px",
      },
      width: {
        "": "100px",
      },
    },
    PasswordInput: {
      colors: {
        bg: {
          "": "#1A38601A",
        },
      },
      border: {
        "": {
          width: "0px",
          color: "#1C304A",
          style: "solid",
        },
      },
      height: {
        "": "40px",
      },
      width: {
        "": "150px",
      },
    },
  },
};
export const aetheruiTheme: Theme = {
  mode: "light",
  typography: {
    h1: generateTypography(600, "40px", "125%", "0%"),
    h2: generateTypography(600, "28px", "125%", "0%"),
    h3: generateTypography(600, "22px", "125%", "0%"),
    h4: generateTypography(600, "18px", "125%", "0%"),
    h5: generateTypography(600, "16px", "125%", "0%"),
    h6: generateTypography(600, "13px", "125%", "0%"),
    default: generateTypography(400, "16px", "161%", "0%"),
    xs: generateTypography(400, "13px", "125%", "0%"),
    xxs: generateTypography(400, "12px", "125%", "0%"),
  },
  shadows: {
    xs: generateShadow(0, 1, 4, -1, "var(--aetherui-color-bg-sub-contrast30)"),
    s: `${generateShadow(0, 3, 12, -1, "var(--aetherui-color-bg-sub-contrast30)")}, ${generateShadow(0, 2, 4, -1, "var(--aetherui-color-bg-sub-contrast10)")}`,
    m: `${generateShadow(0, 8, 24, -4, "var(--aetherui-color-bg-sub-contrast30)")}, ${generateShadow(0, 2, 6, -1, "var(--aetherui-color-bg-sub-contrast10)")}`,
    l: `${generateShadow(0, 12, 48, -6, "var(--aetherui-color-bg-sub-contrast30)")}, ${generateShadow(0, 3, 18, -2, "var(--aetherui-color-bg-sub-contrast10)")}`,
    xl: `${generateShadow(0, 18, 64, -8, "var(--aetherui-color-bg-sub-contrast30)")}, ${generateShadow(0, 4, 24, -3, "var(--aetherui-color-bg-sub-contrast10)")}`,
  },
  radius: {
    s: "4px",
    m: "4px",
    l: "8px",
  },
  common: {
    color: {
      black: "#000000",
      white: "#FFFFFF",
      red: "#FF0000",
      lime: "#00FF00",
      blue: "#0000FF",
      yellow: "#FFFF00",
      cyan: "#00FFFF",
      magenta: "#FF00FF",
      silver: "#C0C0C0",
      gray: "#808080",
      maroon: "#800000",
      olive: "#808000",
      green: "#008000",
      purple: "#800080",
      teal: "#008080",
      navy: "#000080",
      orange: "#FFA500",
      aliceblue: "#F0F8FF",
      antiquewhite: "#FAEBD7",
      aqua: "#00FFFF",
      aquamarine: "#7FFFD4",
      azure: "#F0FFFF",
      beige: "#F5F5DC",
      bisque: "#FFE4C4",
      blanchedalmond: "#FFEBCD",
      blueviolet: "#8A2BE2",
      brown: "#A52A2A",
      burlywood: "#DEB887",
      cadetblue: "#5F9EA0",
      chartreuse: "#7FFF00",
      chocolate: "#D2691E",
      coral: "#FF7F50",
      cornflowerblue: "#6495ED",
      cornsilk: "#FFF8DC",
      crimson: "#DC143C",
      darkblue: "#00008B",
      darkcyan: "#008B8B",
      darkgoldenrod: "#B8860B",
      darkgray: "#A9A9A9",
      darkgreen: "#006400",
      darkkhaki: "#BDB76B",
      darkmagenta: "#8B008B",
      darkolivegreen: "#556B2F",
      darkorange: "#FF8C00",
      darkorchid: "#9932CC",
      darkred: "#8B0000",
      darksalmon: "#E9967A",
      darkseagreen: "#8FBC8F",
      darkslateblue: "#483D8B",
      darkslategray: "#2F4F4F",
      darkturquoise: "#00CED1",
      darkviolet: "#9400D3",
      deeppink: "#FF1493",
      deepskyblue: "#00BFFF",
      dimgray: "#696969",
      dodgerblue: "#1E90FF",
      firebrick: "#B22222",
      floralwhite: "#FFFAF0",
      forestgreen: "#228B22",
      fuchsia: "#FF00FF",
      gainsboro: "#DCDCDC",
      ghostwhite: "#F8F8FF",
      gold: "#FFD700",
      goldenrod: "#DAA520",
      greenyellow: "#ADFF2F",
      honeydew: "#F0FFF0",
      hotpink: "#FF69B4",
      indianred: "#CD5C5C",
      indigo: "#4B0082",
      ivory: "#FFFFF0",
      khaki: "#F0E68C",
      lavender: "#E6E6FA",
      lavenderblush: "#FFF0F5",
      lawngreen: "#7CFC00",
      lemonchiffon: "#FFFACD",
      lightblue: "#ADD8E6",
      lightcoral: "#F08080",
      lightcyan: "#E0FFFF",
      lightgoldenrodyellow: "#FAFAD2",
      lightgray: "#D3D3D3",
      lightgreen: "#90EE90",
      lightpink: "#FFB6C1",
      lightsalmon: "#FFA07A",
      lightseagreen: "#20B2AA",
      lightskyblue: "#87CEFA",
      lightslategray: "#778899",
      lightsteelblue: "#B0C4DE",
      lightyellow: "#FFFFE0",
      limegreen: "#32CD32",
      linen: "#FAF0E6",
      mediumaquamarine: "#66CDAA",
      mediumblue: "#0000CD",
      mediumorchid: "#BA55D3",
      mediumpurple: "#9370DB",
      mediumseagreen: "#3CB371",
      mediumslateblue: "#7B68EE",
      mediumspringgreen: "#00FA9A",
      mediumturquoise: "#48D1CC",
      mediumvioletred: "#C71585",
      midnightblue: "#191970",
      mintcream: "#F5FFFA",
      mistyrose: "#FFE4E1",
      moccasin: "#FFE4B5",
      navajowhite: "#FFDEAD",
      oldlace: "#FDF5E6",
      olivedrab: "#6B8E23",
      orangered: "#FF4500",
      orchid: "#DA70D6",
      palegoldenrod: "#EEE8AA",
      palegreen: "#98FB98",
      paleturquoise: "#AFEEEE",
      palevioletred: "#DB7093",
      papayawhip: "#FFEFD5",
      peachpuff: "#FFDAB9",
      peru: "#CD853F",
      pink: "#FFC0CB",
      plum: "#DDA0DD",
      powderblue: "#B0E0E6",
      rebeccapurple: "#663399",
      rosybrown: "#BC8F8F",
      royalblue: "#4169E1",
      saddlebrown: "#8B4513",
      salmon: "#FA8072",
      sandybrown: "#F4A460",
      seagreen: "#2E8B57",
      seashell: "#FFF5EE",
      sienna: "#A0522D",
      skyblue: "#87CEEB",
      slateblue: "#6A5ACD",
      slategray: "#708090",
      snow: "#FFFAFA",
      springgreen: "#00FF7F",
      steelblue: "#4682B4",
      tan: "#D2B48C",
      thistle: "#D8BFD8",
      tomato: "#FF6347",
      turquoise: "#40E0D0",
      violet: "#EE82EE",
      wheat: "#F5DEB3",
      whitesmoke: "#F5F5F5",
      yellowgreen: "#9ACD32",
    },
    notification: {
      wrapOffset: 4,
      position: "top-right",
      margin: "12px",
      width: "360px",
      "border-radius": "16px",
      disappearTime: 5000,
    },
    notificationCategories: [
      {
        id: "clipboard",
        icon: "ABC",
        variant: "banner",
        label: "Clipboard",
      },
    ],
  },
  light: lightTheme,
};
