/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'rgb(17, 17, 17);',
        opaque: '#232323',
        text: 'rgb(235, 236, 243)',
        brand: '#0aff9d',
      },
    },
  },
  plugins: [],
};
