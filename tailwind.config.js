/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'event': "url('/images/5641003.jpg')",
      },
      colors: {
        beta: "#212529",
        error: "#ff7376",
        alpha: "#fee819",
        good: "#51b04f",
        light_gray: "#f2f2f2",
        skeleton1: "#cacaca",
        skeleton2: "#a3a3a3"
      },
    },
  },
  plugins: [],
};
