/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'false', // or 'media' or 'class'
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#244855',
        secondary: '#2272FF',
        accent: '#874f41',
        light: '#2d2d2d',
        background: '#1d1d1d'
      },
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

