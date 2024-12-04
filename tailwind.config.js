/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2E58FF',
        bg_light: '#F0F0F0',
        bg_dark: '#D9D9D9',
        white: '#FFFFFF',
        black: '#000000',
      },
    },
  },
  plugins: [],
}
