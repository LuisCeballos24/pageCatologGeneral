// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Asegúrate de que Tailwind procese tus archivos de React
  ],
  theme: {
    extend: {
      colors: {
        'panama-blue': '#005293',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
