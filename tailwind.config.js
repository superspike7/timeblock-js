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
        '20m' : '74px',
        '30m' : '111px',
        '40m' : '148px',
        '50m' : '185px',
        '1h'  : '14rem'

      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/custom-forms'),
  ],
}
