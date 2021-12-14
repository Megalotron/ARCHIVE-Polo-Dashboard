module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
    extend: {
      colors: {
        cardBackground: "#ffffff",
        cardBackgroundDark: "#2b2a33",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
