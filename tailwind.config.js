/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#80cc28",
        "primary-light": "#b1e476",
        text: "#000",
        "text-dark": "#000",
        "background-100": "#ffffff",
        "background-500": "#ffffff",
        "background-900": "#ffffff",
        red: "#fa5252",
        "red-dark": "#e03131",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
