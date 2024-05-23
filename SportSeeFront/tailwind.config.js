/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      fontSize: {
        7: '7px',
        8: '8px',
        15: '15px',
        26: '26px',
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
        38: '9.5rem',
        66: '16.5rem',
      },
      width: {
        38: '9.5rem',
        208: '52rem',
      },
      colors: {
        'custom-white-50': 'rgba(255, 255, 255, 0.5)',
        'custom-gray-100': 'rgba(249, 250, 251, 0.3)',
        'custom-gray-300': '#CCCCCC',
        'custom-slate-300': '#9B9EAC',
        'custom-slate-500': '#74798C',
        'custom-slate-800': '#282D30',
        'custom-red-600': '#e60000',
      },
      keyframes: {
        spin: {
          '0%': { transform: 'spin(0deg)' },
          '100%': { transform: 'spin(360deg)' },
        },
      },
      animation: {
        spin: 'spin 2s linear infinite',
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
