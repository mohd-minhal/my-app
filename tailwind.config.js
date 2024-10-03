/** @type {import('tailwindcss').Config} */
export const content = [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  extend: {
    fontFamily: {
      fredoka: ['Fredoka', 'sans-serif'],
    },
    animation: {
      blinker: 'blinker 3s linear infinite',
      rotate: 'rotate 20s linear infinite',
    },
    keyframes: {
      blinker: {
        '50%': { opacity: '0.1' },
      },
      rotate: {
        '0%': { transform: 'rotate(360deg)' },
        '100%': { transform: 'rotate(0deg)' },
      },
    },
  },
};
export const plugins = [];
