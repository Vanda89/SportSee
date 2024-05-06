/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      rotate: {
        270: '270deg',
      },
      spacing: {
        5.5: '1.375rem',
      },
      colors: {
        lightGrey: '#74798C',
        darkGrey: '#282D30',
      },
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
