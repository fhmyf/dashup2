/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      colors: {
        navy: {
          DEFAULT: '#0a192f',
          dark: '#051428',
        },
      },
    },
  },
  plugins: [],
};