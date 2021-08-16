module.exports = {
  purge: [
    "./dist/**/*.html",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '80v' : '80vh',
        '10m' : '2.27rem'

      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
