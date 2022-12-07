/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        helveticaRegular: "Helvetica Neue W01 87 Hv Cn Obl",
        helveticaBold: "Helvetica Neue W01 77 Bd Cn Obl",
      },
    },
  },
  plugins: [],
};
