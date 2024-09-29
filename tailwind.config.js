/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        textHover: "#808080",
        black: "#000000",
        textGrey: "#555555",
        buttonGrey: "#353535",
        borderGrey: '#a3a3a3',
      },
    },
  },
  plugins: [],
};
