/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{html,js,jsx}",
    "./components/**/*.{html,js,jsx}",
    "./sections/**/*.{html,js,jsx}",
    "./styles/**/*.{js,jsx}",
    "./node_modules/flowbite-react/**/*.js",
  ],
  plugins: [require("flowbite/plugin")],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        "primary-black": "#18181C",
        "main-950": "#111A00",
        "main-900": "#213300",
        "main-800": "#426600",
        "main-700": "#639900",
        "main-600": "#85CC00",
        "main-500": "#ADFF15",
        "main-400": "#B8FF33",
        "main-300": "#C9FF66",
        "main-200": "#DBFF99",
        "main-100": "#EDFFCC",
      },
    },
  },
};
