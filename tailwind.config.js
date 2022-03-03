module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        inner: "inset 5px 5px 10px #bebebe,inset -5px -5px 10px #ffffff",
        purple: "inset 10px 10px 15px #450f96,inset -10px -10px 10px #881dff",
        gray: "inset 5px 5px 10px #252c36,inset -5px -5px 10px #49566c",
        dark: "inset 12px 12px 10px #0f1835,inset -12px -12px 10px #223678",
        white: "5px 5px 30px #000333,-5px -5px 10px #ffffff",
      },
      colors: {
        violet: "#6616DC",
      },
    },
  },
  plugins: [],
};
