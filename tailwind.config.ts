import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      "bg-main": "#FAFAFA",

      "white-base": "#ffffff",
      "black-base": "#000000",

      "green-light": "#C6FF00",
      "green-dark": "#BCEC30",

      "error": "#DB0030",

      "blue-graph": "#00C1FF",

      "gray-light": "#F7F7F7",
      "gray-dark": "#E9ECED",

      "gray-extra": "#D0CECE",

      "theme-yellow": "#FFC700",
      "theme-blue": "#2491D2",
      "theme-orange": "#F7A012",
      "theme-peach": "#FF7E65",
      "theme-violet": "#7D458C",
    },
  },
  plugins: [],
};
export default config;


