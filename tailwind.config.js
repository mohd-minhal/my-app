/** @type {import('tailwindcss').Config} */
export const content = [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
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
};
export const plugins = [];
