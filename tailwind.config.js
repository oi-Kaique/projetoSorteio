/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**/*.{html,js}", "!**/node_modules"],
  theme: {
    extend: {
      fontFamily: {
        roboto: '"Roboto", sans-serif',
        sora: '"Sora", serif',
        inter: '"Inter", sans-serif',
        "roboto-mono": '"Roboto Mono", monospace',
      },
      backgroundImage:{
        'shape': "url('./shape.png')",
      }
    },
  },
  plugins: [require("@tailwindcss/forms")],
}