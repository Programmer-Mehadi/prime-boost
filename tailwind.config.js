/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ReddishOrange: "#F54C1E",
        MidNight: "#031333",
        AquaHaze: "#F4F3F3",
        MountainMist: "#949494",
        BattleShip: "#818181"
      },
      fontFamily: {
        NunitoSans: ['Nunito Sans', 'sans-serif'],
        Lato: ['Lato', 'sans-serif'],
        Poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [require("daisyui")],
}

