/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
      screens: {
          sm: '480px',
          md: '768px',
          lg: '1025px',
          xl: '1280px',
          xl2: '1360px',
      },
      extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
      styled: true,
      themes: ['light', 'dark'],
      base: true,
      utils: true,
      logs: true,
      rtl: false
  },
};