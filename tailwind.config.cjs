/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        openpurple: "#7451eb",
        bgcard: "#000",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: {'max': "1000px"},
        xm: {'min': "1000px"},
        ls: {'max': "1200px"},
        xxs: {'max': "500px"},
        xx: {'max': "600px"},
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/bgportfolio.jpg')",
      },
    },
  },
  plugins: [],
};

