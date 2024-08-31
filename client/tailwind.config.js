/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/header/*.tsx",
    "./src/components/footer/*.tsx",
    "./src/components/form/*.tsx",
    "./src/pages/*.tsx",
    "./src/scss/*.scss",
    "./src/scss/abstract/*.scss",
    "./src/scss/abstract/colors/*.scss",
    "./src/scss/components/footer/*.scss",
    "./src/scss/components/form/*.scss",
    "./src/scss/components/header/*.scss",
    "./src/scss/pages/*.scss",
    "./src/pages/admin/*.scss",
    "./src/pages/admin/posts/*.scss",
    "./src/components/aside/*.scss",
    "./src/components/auth/*.scss",
    "./src/components/form/*.scss",
    "./src/components/posts/*.scss",
    "./src/components/profile/*.scss",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
    require('flowbite/plugin'),
  ],
};
