/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "#ffffff",
      black: "#000000",
      light: "#f8f9fa",
      dark: "#212529",
      primary: {
        900: "#680518",
        700: "#740A16",
        DEFAULT: "#7F1114",
        400: "#B24D51",
        300: "#DA9999",
        200: "#F8E6E6",
      },
      gray: {
        900: "#4F5F5F",
        700: "#5D6D6E",
        DEFAULT: "#6B7A7D",
        400: "#95A4A6",
        300: "#C1CCCD",
        200: "#EFF3F3",
      },
      success: {
        900: "#0F9B43",
        700: "#19AE5C",
        DEFAULT: "#24BF77",
        400: "#54E49D",
        300: "#99FAC4",
        200: "#E6FFEF",
      },
      danger: {
        900: "#9B0F15",
        700: "#AE2019",
        DEFAULT: "#BF3824",
        400: "#E46354",
        300: "#FA9B99",
        200: "#FFE6E6",
      },
      warning: {
        900: "#BF7500",
        700: "#DF9A00",
        DEFAULT: "#FFC107",
        400: "#FFDB4D",
        300: "#FFED99",
        200: "#FFFBE6",
      },
      info: {
        900: "#009C92",
        700: "#07ACAF",
        DEFAULT: "#11AEBF",
        400: "#4DDBE6",
        300: "#99F7FC",
        200: "#E6FFFF",
      },
    },
    extend: {
      backgroundImage: {
        totos: "url('/src/assets/img/banner_pizza.jpeg')",
      },
      boxShadow: {
        totos:
          "0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 2px 4px 0px rgba(9, 8, 66, 0.08)",
      },
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
  },
  plugins: [],
};
