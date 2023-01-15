/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-blue-color": "#1F509A",
        "primary-full-dark-color": "#141414",
        "primary-mid-dark-color": "#1D1D1D"
      },
      fontFamily: {
        "nunito-sans": "'Nunito Sans', sans-serif"
      },

    },
  },
  plugins: [],
}