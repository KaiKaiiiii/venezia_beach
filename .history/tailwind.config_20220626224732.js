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
        "text-warning": "linear-gradient(310deg,#f53939,#fbcf33)",
        horizontal:
          "linear-gradient(90deg,transparent,rgba(0,0,0,.4),transparent)",
        vertical:
          "linear-gradient(180deg,transparent,rgba(0,0,0,.4),transparent)",
      },
      colors: {
        primary: "#17746c",
        secondary: "#f18a48",
        gray: "#343a40",
      },
      borderWidth: {
        DEFAULT: "1px",
        0: "0",
        2: "2px",
        3: "3px",
        4: "4px",
        6: "6px",
        8: "8px",
      },
    },
  },
  plugins: [],
};
