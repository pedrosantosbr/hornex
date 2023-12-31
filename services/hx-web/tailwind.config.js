/** @type {import('tailwindcss').Config} */

const { fontSize } = require("./src/app/theme/fontStyles");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: [
        "Inter var, sans-serif",
        {
          fontFeatureSettings: '"cv11", "ss01"',
          fontVariationSettings: '"opsz" 32',
        },
      ],
    },
    fontSize,
    extend: {
      boxShadow: {
        "highlight-all": "inset 0 0 0 1px #ffffff1a",
        "highlight-100": "inset 0 1px 0 0 #ffffff0d",
        "highlight-200": "inset 0 1px 0 0 #fff3",
      },
      backgroundImage: {
        hero: "url('/league-art.png')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#0D1321",
      },
    },
  },
  plugins: [],
};
