/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        oswald: "Oswald",
        pacifico: ['Pacifico', 'cursive']
      },
      colors: {
        amber: "#FF9C1A",
      },
    },
  },
  plugins: [],
};
