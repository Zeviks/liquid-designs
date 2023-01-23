/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    extend: {
      plugins: [require("flowbite/plugin")],
      theme: {
        extend: {
          colors: {
            "primary-black": "#020B18",
            "secondary-white": "#c7c7c7",
            "main-900": "#190A01",
            "main-800": "#632903",
            "main-700": "#943E05",
            "main-600": "#C65306",
            "main-500": "#F76809",
            "main-400": "#F98639",
            "main-300": "#FAA46B",
            "main-200": "#FCC29C",
            "main-100": "#FDE1CE",
          },
        },
      },
    },
  },
};
