/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
    backgroundImage: theme => ({
        'app-background': "url('img/alena-aenami-escape.jpg')"
      }),
    },
  },
  plugins: [],
}
