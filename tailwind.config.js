/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'], // Asegúrate de que esté correctamente configurado
  theme: {
    extend: {
      colors: {
        'custom-pink': '#ffcccb', // Color rosa pálido personalizado
      },
    },
  },
  plugins: [],
}