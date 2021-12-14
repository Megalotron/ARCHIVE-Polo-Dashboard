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
        usersStatus: "#44EC55",
        networkSpeedUpload: "#E1CFF3",
        networkSpeedDownload: "#BFE1DF",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
