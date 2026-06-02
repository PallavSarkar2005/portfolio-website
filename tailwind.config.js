/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        clay: '#C4714A',
        clayLight: '#E8C5A8',
        clayPale: '#F5EDE3',
        sage: '#7A8C6E',
        bark: '#3D2B1A',
        sand: '#F0E6D3',
        linen: '#FAF6EF',
        moss: '#4A5E3A',
        stone: '#D4C5B0'
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        sans: ['DM Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}