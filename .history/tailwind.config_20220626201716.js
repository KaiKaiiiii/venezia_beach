module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-success":
          "linear-gradient(310deg,#17746c,rgba(45,236,74,.718))",
      },
      color: {
        primary: "#17746c",
        secondary: "#f18a48",
      },
    },
  },
  plugins: [],
};
