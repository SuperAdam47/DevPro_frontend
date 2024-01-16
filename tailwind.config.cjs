/** @type {import('tailwindcss').Config}*/
const config = {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
    "./node_modules/flowbite/**/*.js",
  ],

  theme: {
    extend: {
      colors: {
        // flowbite-svelte
        primary: {
          0: "#282828",
          1: "#FF8A00",
          2: "#FF4F17",
          3: "#323232C7",
          4: "#363636",
          5: "#FFFFFF80",
          50: "#ff8a00",
          100: "#1E1E1E",
          200: "#FFE4DE",
          300: "#FFD5CC",
          400: "#FFBCAD",
          500: "#FE795D",
          600: "#EF562F",
          700: "#EB4F27",
          800: "#CC4522",
          900: "#A5371B",
        },
      },
    },
  },

  darkMode: "class",

  plugins: [require("flowbite/plugin")],
};

module.exports = config;
