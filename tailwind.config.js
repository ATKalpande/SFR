/** @type {import('tailwindcss').Config} */

import { fontFamily as _fontFamily } from "tailwindcss/defaultTheme";
import { fontFamily } from "tailwindcss/defaultTheme";

export const content = [
  "./src/pages/**/*.{js,ts,jsx,tsx}",
  "./src/components/**/*.{js,ts,jsx,tsx}",
  "./src/app/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  extend: {
    backgroundImage: {
      "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
    },
    fontFamily: {
      Manrope: ["Manrope", , ..._fontFamily.sans],
      primary: ["var(--manrope-font)", "Manrope", ...fontFamily.sans],
      serif: ["var(--manrope-font)", ...fontFamily.serif],
    },
  },
};
export const plugins = [];
