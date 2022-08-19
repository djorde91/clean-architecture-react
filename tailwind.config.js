/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    // Screen custom resolutions for matching materialUI breakpoints.
    screens: {
      sm: '600px',
      md: '900px',
      lg: '1200px',
      xl: '1536px',
    },
    extend: {
      screens: {
        xs: '0px',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
