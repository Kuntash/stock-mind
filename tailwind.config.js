/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],

  theme: {
    extend: {
      colors: {
        text: '#041d25',
        background: '#f6fdfe',
        primary: '#1bb5e4',
        secondary: '#8895f1',
        accent: '#735bec',
        danger: '#dc2626',
      },
      fontFamily: {
        poppinsLight: ['poppinsLight'],
        poppinsRegular: ['poppinsRegular'],
        poppinsMedium: ['poppinsMedium'],
        poppinsSemiBold: ['poppinsSemiBold'],
        poppinsBold: ['poppinsBold'],
      },
    },
  },
  plugins: [],
};
