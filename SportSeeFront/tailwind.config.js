/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      fontSize: {
        8: '8px',
        15: '15px',
      },
      rotate: {
        270: '270deg',
      },
      spacing: {
        5.5: '1.375rem',
        26: '6.5rem',
      },
      height: {
        31: '7.5rem',
        66: '16.5rem',
      },
      width: {
        208: '52rem',
      },
      colors: {
        lightGrey: '#74798C',
        darkGrey: '#282D30',
        primary: '#e60000',
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
