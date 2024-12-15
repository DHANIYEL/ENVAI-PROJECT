/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2E58FF',
        light: '#F0F0F0',
        dark: '#D9D9D9',
        white: '#FFFFFF',
        black: '#000000',
      },
      screens: {
        '1310px': '1310px',
        '1130px': '1130px',
      },
    },
  },
  plugins: [],
}
