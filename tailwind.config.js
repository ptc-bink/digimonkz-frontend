/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,tsx,ts}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {},
    colors: {
      border: "rgb(44,52,65)",
      textBlack: "#0a1a1b",
      textGreen: "#5c9e90"
    },
    fontFamily: {
      "BubblegumSans": ['BubblegumSans']
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}