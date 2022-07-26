module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'secomp': '#ec5544',
      },

      width: {
        '1/50': '5.00%',
        '3/20': '15.00%',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
