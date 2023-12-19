/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'azul-f': '#000e19',
        'azul': '#012340',
        'azulado': '#025939',
        'verde-f': '#027333',
        'verde-c': '#03A63C',
        'verde-b': '#04D939'
      },
    },
  },
  plugins: [],
}

