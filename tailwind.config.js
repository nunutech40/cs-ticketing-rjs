/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        'bg-black-card': '#333333',
        'bg-red-card': '#FF6D6D',
        'bg-yellow-card': '#FBE77D',
        'bg-blue-card': '#7DCEFB',
      },
    },
  },
  plugins: [],

}
