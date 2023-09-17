module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderColor: {
        'gray': '#ccc', // Add custom border colors here
      },
      borderWidth: {
        '1': '1px',   // Add custom border widths here
        '2': '2px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
