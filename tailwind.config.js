/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        exo: ['"Exo 2"', 'sans-serif'], // Exo 2
        russo: ['"Russo One"', 'sans-serif'], // Russo One
        pixel: ['"Press Start 2P"', 'sans-serif'], // Press Start 2P
      },
      animation: {
        cardFlip: "cardFlip 2s cubic-bezier(0.25, 1, 0.5, 1) forwards",
      },
      keyframes: {
        cardFlip: {
          "0%": {
            transform: "rotateY(720deg)", // 5 vueltas completas
            opacity: 0,
          },
          "25%": {
            //transform: "rotateY(1440deg)", // 4 vueltas
            opacity: 0.3,
          },
          "50%": {
            //transform: "rotateY(720deg)", // 2 vueltas
            opacity: 0.6,
          },
          "75%": {
            //transform: "rotateY(360deg)", // 1 vuelta
            opacity: 0.8,
          },
          "100%": {
            //transform: "rotateY(0deg)", // Frente visible
            opacity: 1,
          },
        },
      },
    },
  },
  plugins: [],
};
