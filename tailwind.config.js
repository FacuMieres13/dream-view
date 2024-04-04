/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html','./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        fondoHeader:"#1C1C1C",
        fondoCartelera:"#2A303C",
        violeta:"#554F95",
        fondoResena:"#282828",
        fondoSinopsis: "#D9D9D9",
        greyText: '#8D8D8D',
      },
      fontFamily:{
        'inter' : ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}