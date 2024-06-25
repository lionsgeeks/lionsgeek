
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        "lg-red": "#ff7376",
        "lg-yellow": "#fee819",
        "lg-green": "#51b04f",
        "lg-blue": "#18BDE8",
      }
    },
  },
  plugins: [],
}
