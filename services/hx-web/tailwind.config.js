/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
const { fontSize } = require("./src/app/theme/fontStyles");
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      satoshi: ["Satoshi", "sans-serif"],
      inter: ["Inter", "sans-serif"],
    },
    fontSize,
    extend: {
      colors: {
        body: "#fcfcfc",
        primary: "#0D1321",
        dark: "#0D1321",
        "light-dark": "#171e2e",
        "sidebar-body": "#F8FAFC",
      },
      boxShadow: {
        main: "0px 6px 18px rgba(0, 0, 0, 0.04)",
        light: "0px 4px 4px rgba(0, 0, 0, 0.08)",
        large: "0px 8px 16px rgba(17, 24, 39, 0.1)",
        card: "0px 2px 6px rgba(0, 0, 0, 0.06)",
        transaction: "0px 8px 16px rgba(17, 24, 39, 0.06)",
        expand: "0px 0px 50px rgba(17, 24, 39, 0.2)",
        button:
          "0px 2px 4px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.1)",
      },
      dropShadow: {
        main: "0px 4px 8px rgba(0, 0, 0, 0.08)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    plugin(function ({ addUtilities }) {
      addUtilities({
        /* Hide scrollbar for Chrome, Safari and Opera */
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },

        /* Hide scrollbar for IE, Edge and Firefox */
        ".no-scrollbar": {
          "-ms-overflow-style": "none" /* IE and Edge */,
          "scrollbar-width": "none" /* Firefox */,
        },
      });
    }),
  ],
};
