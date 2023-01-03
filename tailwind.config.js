/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#212121",
        white: "#F5F5F5",
        gray: "#9E9E9E",
        lightYellow: "#F5E8C5",
      },
    },
  },
  plugins: [],
}
