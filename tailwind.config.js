/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'ak': '710px',
      'akn': '720px',

      'sm': '640px',



      'md': '768px',


      'lg': '1024px',


      'xl': '1280px',


      '2xl': '1536px',


    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'Owhite': '#e7e5df',
      'Oblue': '#161db5',
      'Oblack': '#181818',
      'Ogray': '#cecece',
    },
    extend: {
      keyframes: {
        updown: {
          '0%, 100%': {
            transform: 'translateY(-30%)',
            animationTimingFunction: 'ease-in-out',
          },
          '50%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'ease-in-out',
          },
        },
      },
      animation: {
        updown: 'updown 2.5s infinite',
      },
    },
  },
  plugins: [],
}