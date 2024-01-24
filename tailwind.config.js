/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'cor-fundo':'#0e1129',
        'cor-2':'#2b3566',
        'cor-3':'#9da5d1',
        'cor-4':'#2b3566',
        'cor-5':'#021129',
        'cor-borda':'#644aff',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}