import type { Config } from "tailwindcss";
import {nextui} from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui({
    themes: {
      dark: {
        colors: {
          background: "#070707",
          foreground: "#ffffff",
          primary: {
            DEFAULT: "#0072f5",
            50: "#192342",
            100: "#1d3162",
            200: "#1f4184",
            300: "#1e51a8",
            400: "#0072f5",
            500: "#4980f7",
            600: "#698ff8",
            700: "#839efa",
            800: "#9aadfb",
            900: "#b0bdfc",
            foreground: "#ffffff", // Assuming you meant the text color for primary elements
          },
          secondary: {
            DEFAULT: "#17c964",
            50: "#1d522d",
            100: "#206e3a",
            200: "#218b48",
            300: "#1eaa56",
            400: "#17c964",
            500: "#4ad075",
            600: "#68d686",
            700: "#81dd97",
            800: "#98e3a8",
            900: "#aee9b9",
            foreground: "#070707", // Assuming you meant the text color for secondary elements
          },
          focus: "#0072f5",
        },
      },
      light: {
        colors: {
          background: "#ffffff",
          foreground: "#070707",
          primary: {
            DEFAULT: "#0072f5",
            50: "#192342",
            100: "#1d3162",
            200: "#1f4184",
            300: "#1e51a8",
            400: "#0072f5",
            500: "#4980f7",
            600: "#698ff8",
            700: "#839efa",
            800: "#9aadfb",
            900: "#b0bdfc",
            foreground: "#ffffff", // Assuming you meant the text color for primary elements
          },
          secondary: {
            DEFAULT: "#17c964",
            50: "#1d522d",
            100: "#206e3a",
            200: "#218b48",
            300: "#1eaa56",
            400: "#17c964",
            500: "#4ad075",
            600: "#68d686",
            700: "#81dd97",
            800: "#98e3a8",
            900: "#aee9b9",
            foreground: "#070707", // Assuming you meant the text color for secondary elements
          },
          focus: "#0072f5",
        },
      },
    },
  })],
};

export default config;