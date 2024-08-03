/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/header/*.tsx",
    "./src/components/footer/*.tsx",
    "./src/components/form/*.tsx",
    "./src/pages/*.tsx",
    "./scss/*.scss",
    "./scss/abstract/*.scss",
    "./scss/abstract/colors/*.scss",
    "./scss/components/footer/*.scss",
    "./scss/components/form/*.scss",
    "./scss/components/header/*.scss",
    "./scss//pages/*.scss",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
