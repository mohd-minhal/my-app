/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Adjust based on your project structure
  ],
  theme: {
    extend: {
      animation: {
        blinker: 'blinker 3s linear infinite',
      },
      keyframes: {
        blinker: {
          '50%': { opacity: '0.1' },
        },
      },
    },
  },
  plugins: [],
}
