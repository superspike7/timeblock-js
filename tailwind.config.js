module.exports = {
  purge: [
    "./dist/**/*.html",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '80v' : '80vh'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
