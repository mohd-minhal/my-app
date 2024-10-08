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
      rise: 'rise 1s ease-in-out forwards',
      drawLine: 'drawLine 2s ease forwards',
    },
    keyframes: {
      blinker: {
        '50%': { opacity: '0.1' },
      },
      rotate: {
        '0%': { transform: 'rotate(360deg)' },
        '100%': { transform: 'rotate(0deg)' },
      },
      rise: {
        '0%': { transform: 'translateY(100%)' },
        '100%': { transform: 'translateY(0)' },
      },
      drawLine: {
        to: {
          strokeDashoffset: '0',
        },
      },
    },
  },
};
export const plugins = [];
