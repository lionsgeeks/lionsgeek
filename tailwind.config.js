/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        beta: "#212529",
        error: "#ff7376",
        alpha: "#fee819",
        good: "#51b04f",
      },
    },
  },
  plugins: [],
};
