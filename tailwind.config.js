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
        lightGray: "#EEEEEE",
        lighterGray: "#616161",
        lightestGray: "#757575",
        darkGray: "#424242",
        lightYellow: "#D8CFAF",
        lighterYellow: "#F9EFD7",

        brown: "#CDBFA5",
        "gray-100": "#F5F5F5",
        "gray-200": "#EEEEEE",
        "gray-300": "#E0E0E0",
        "gray-400": "#BDBDBD",
        "gray-500": "#9E9E9E",
        "gray-600": "#757575",
        "gray-700": "#616161",
        "gray-800": "#424242",
        "gray-900": "#212121",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
}
