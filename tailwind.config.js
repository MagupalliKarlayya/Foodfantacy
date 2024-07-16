/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}", "./index.html"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(180deg, #CFE7DE 27.17%, #D8E7CF 74.67%)",
      },
      fontFamily: {
        chiller: ["Creepster", "cursive"],
        blackadder: ["Blackadder ITC", "cursive"],
        arialRounded: ['"Arial Rounded MT Bold"', "Arial", "sans-serif"],
        berlinSans: ['"Berlin Sans FB Demi"', "Arial", "sans-serif"],
        curlz: ['"Curlz MT"', "cursive"],
      },

      transitionTimingFunction: {
        "in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
        "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
      },
    },
  },
  plugins: [],
};
