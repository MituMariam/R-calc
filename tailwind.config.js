/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
    extend: {
      colors: {
        primary: '#e2e2e2',

      },
      boxShadow: {
        out1: '6px 6px 12px  #b5b5b5',
        out2: '-6px -6px 12px  #ffffff',
        inner1: 'inset 5px 5px 10px  #b5b5b5',
        inner2: 'inset -5px -5px 10px  #ffffff',
      }
    },
  },
  plugins: [],
}
