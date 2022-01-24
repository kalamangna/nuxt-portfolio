module.exports = {
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      poppins: "Poppins, sans-serif",
      montserrat: "Montserrat, sans-serif",
    },
    extend: {
      colors: {
        primary: "#001E26",
        primaryLighter: "#012A35",
        primaryLightest: "#003543",
        secondary: "#00DC82",
        secondaryLighter: "#40E5A1",
      },
    },
  },
  variants: {
    extend: {
      fontWeight: ["hover"],
    },
  },
}
