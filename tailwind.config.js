const colors = require('tailwindcss/colors')
module.exports = {
  content: ['./index.html', './src/**/*/.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      spacing: {
        '128': '32rem',
      },
      screens:{
        'sm': '280px',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        gray: colors.trueGray,
        red: colors.red,
        blue: colors.sky,
        yellow: colors.amber,
        cyan: colors.cyan,
        teal: colors.teal
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
