module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        'screen-1/2': '50vw',
        'screen-1/3': '33vw',
        'screen-1/4': '25vw',
        'screen-3/4': '75vw',
        'screen-4/5': '80vw',
        'screen-9/10': '90vw',
      },
      height:{
        'screen-1/10': '10vh',
        'screen-2/10': '20vh',
        'screen-3/10': '30vh',
        'screen-1/3': '33vh',
        'screen-1/2': '50vh',
        'screen-1/4': '25vh',
        'screen-3/4': '75vh',
        'screen-4/5': '80vh',
        'screen-9/10': '90vh',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
