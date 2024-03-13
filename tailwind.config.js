/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    
      colors:{
        redbgAvi:'#F0552A',
        btndisable:'#D5D5D5',
        graytext:"#727272",
        bgheader:"#DEDEDE",
        purplee: "#410987"
    }
    },
  },
  plugins: [],
}