module.exports = {
  purge: [
    "./dist/**/*.html",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '80v' : '80vh',
        '10m' : '37px',
        '20m' : '37px',
        '30m' : '37px',
        '40m' : '37px',
        '50m' : '37px',
        '1h'  : '14rem'

      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
