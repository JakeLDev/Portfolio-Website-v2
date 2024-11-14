/** @type {import('tailwindcss').Config} */

// tailwind.config.js
const { nextui } = require("@nextui-org/react");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'atlassian-blue': '#0052CC',
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()]
}
