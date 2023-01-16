/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'poppins' : ['"Poppins"', 'sans-serif'],
      },
      backgroundImage: {
        'hero': "url('./public/assets/banner.png')",
      }
    },
  },
  plugins: [],
}


