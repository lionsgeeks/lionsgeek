
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        "apple": "#ff7376",
        "banana": "#fee819",
        "avocado": "#51b04f",
        "grape": "#18BDE8",
      }
    },
  },
  plugins: [],
}
