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
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
}
