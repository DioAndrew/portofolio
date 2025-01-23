/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'header': ['Anton\\ SC', 'sans-serif'],
        'body': ['Lato', 'sans-serif']
      }
    },
  },
  plugins: [],
}

