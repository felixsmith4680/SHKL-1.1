/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FAF8F5',
          100: '#F5F1EC',
          200: '#EDE8E0',
          300: '#E5DED3',
          400: '#DDD4C6',
          500: '#D5CAB9',
          600: '#C5B8A5',
          700: '#B5A691',
        },
        forest: {
          400: '#3D5A4C',
          500: '#2F4A3D',
          600: '#243A2F',
          700: '#1A2B22',
        },
      },
    },
  },
  plugins: [],
};
