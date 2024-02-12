/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      white: "#FFF",
      black: "#000",
      base: "#F2F2F2",
      primary: "#373873",
      secondary: "#FCBD1F",
      secondary1: "#8185C9",
    },
    screens: {
      xs: "430px",
    },
    extend: {},
  },
  plugins: [],
};
