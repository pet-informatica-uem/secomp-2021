module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'secomp': '#4a8123',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
