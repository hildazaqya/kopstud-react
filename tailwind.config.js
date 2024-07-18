/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'darkbrown': '#2d2424',
        'lightbrown': '#9b8f74',
        'softbrown': ' #797160',
        'chocobrown': '#B85C38',
      },
      boxShadow: {
       'card': '0 3px 10px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
}

