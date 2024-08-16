import type { Config } from "tailwindcss";

const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  plugins: [
    addVariablesForColors,
    function ({ addUtilities }: { addUtilities: any }) {
      addUtilities(
        {
          ".text-shadow-sm": {
            textShadow: "1px 1px 1px rgba(0, 0, 0, 0.3)",
          },
          ".text-shadow": {
            textShadow: "2px 2px 2px rgba(0, 0, 0, 0.3)",
          },
          ".text-shadow-md": {
            textShadow: "4px 4px 4px rgba(0, 0, 0, 0.3)",
          },
          ".text-shadow-lg": {
            textShadow: "6px 6px 6px rgba(0, 0, 0, 0.3)",
          },
        },
        ["responsive", "hover"]
      );
    },
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        text: "0 0 1px rgba(0, 0, 0, 0.1), 0 0 1px rgba(0, 0, 0, 0.1)",
        "text-lg": "0 0 2px rgba(0, 0, 0, 0.15), 0 0 2px rgba(0, 0, 0, 0.15)",
        "text-xl": "0 0 4px rgba(0, 0, 0, 0.2), 0 0 4px rgba(0, 0, 0, 0.2)",
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      },
    },
  },
};
export default config;

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
