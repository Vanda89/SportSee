/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      rotate: {
        270: '270deg',
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
