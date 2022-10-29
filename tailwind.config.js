const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require('tailwindcss/colors');
module.exports = {
  mode: "jit",
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './safelist.txt'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontSize: {

      },
      fontFamily: {
        ReadexPro: ["ReadexPro", ...defaultTheme.fontFamily.sans]
      }, colors: {
        "white": colors.white,
        "primary": colors.gray,
        "secondary": colors.red,

        "success": colors.green,
        "info": colors.blue,
        "warning": colors.yellow,
        "danger": colors.rose,

        "light": colors.slate,
        "dark": colors.zinc
      }
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ],
}
