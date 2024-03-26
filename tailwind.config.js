/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    container: {
      position: 'relative'
    },
    extend: {
      backgroundImage: {
        'bottom': "url('/assets/x.png')",
      },
    },
  },
  plugins: [
    require("daisyui"),
    require('flowbite/plugin')
  ],
}

