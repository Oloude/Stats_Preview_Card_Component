/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Lexend_Deca": ['"Lexend Deca"', ...defaultTheme.fontFamily.serif],
        "Inter": ['"Inter"', ...defaultTheme.fontFamily.serif],
      },
      colors : {
        "mainBg" : "#090b1a",
        "cardBg" : "#1b1938",
        "accent" : "#aa5cdb" 
      }
    },
  },
  plugins: [],
}