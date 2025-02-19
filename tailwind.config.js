/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    letterSpacing: {
      tighter: "-.05em",
      tight: "-.025em",
      normal: "0",
      wide: ".025em",
      // wider: '.05em',
      wider: ".1em",
      // widest: '.1em',
      widest: ".25em",
    },
    extend: {},
  },
  plugins: [],
};
