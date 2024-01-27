/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "430px",
    },
    extend: {
      backgroundImage: {
        home: "url('/src/assets/home.png')",
      },
    },
  },
  plugins: [],
};
