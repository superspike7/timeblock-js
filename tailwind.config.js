module.exports = {
  purge: [
    "./dist/**/*.html",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '80v' : '80vh',
        '0030' : '112px',
        '0100'  : '224px',
        '0130'  : '336px',
        '0200'  : '448px',
        '0230'  : '560px',
        '0300'  : '672px',
        '0330'  : '784px',
        '0400'  : '896px',
        '0430'  : '1008px',
        '0500'  : '1120px',
        '0530'  : '1232px',
        '0600'  : '1344px',
        '0630'  : '1456px',
        '0700'  : '1578px',

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
