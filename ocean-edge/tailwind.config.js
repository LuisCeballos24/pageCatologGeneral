// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Asegúrate de que Tailwind procese tus archivos de React
  ],
  theme: {
    extend: {
      colors: {
        // Personaliza los colores si es necesario
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
