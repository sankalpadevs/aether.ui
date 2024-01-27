/** @type {import('tailwindcss').Config} */
export default {
  corePlugins: {
    preflight: false,
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      text: {
        primary: "var(--aetherui-color-text-primary)",
      },
      bg: {
        primary: "var(--aetherui-color-bg-primary)",
      },
    },
    variables: {
      DEFAULT: {
        // ------------------ IMPORTANT -------------------
        // | These defaults are set in the :root.To ensure |
        // | the variable names does not override aetherui |
        // | is added as prefix.                           |
        // ------------------------------------------------

        color: {
          text: {
            primary: "#000",
          },
          bg: {
            primary: "#fff",
          },
        },
      },
    },
    extend: {},
  },
  plugins: [
    require("@mertasan/tailwindcss-variables")({
      variablePrefix: "aetherui",
    }),
  ],
  prefix: "aetherui-",
};
