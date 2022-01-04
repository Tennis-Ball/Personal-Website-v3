module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        c_beige: "#cec0af",
        c_darkblue: "#242e35",
        c_lightblue: "#2d02d0",
        c_pink: "f0cad5",
      },
      screens: {
        "3xl": "1792px",
        short: { raw: "(max-height: 430px)" },
      },
    },
  },
  plugins: [],
};
