/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          200: "#EAECF0",
          900: "#101828",
        },
      }
    },
  },
  plugins: [],
}
