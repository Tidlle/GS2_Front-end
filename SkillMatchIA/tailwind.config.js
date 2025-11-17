/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1D5BFF",
          dark: "#0A2A66",
          light: "#3FA8FF",
        },
        accent: {
          DEFAULT: "#39D2FF",
        },
        neutralSm: "#F4F6FA",
        neutralMd: "#9EA8B7",
        neutralDk: "#2C2F33",

        darkBg: "#0D1117",
        darkCard: "#0A1A2F",
      },
      boxShadow: {
        card: "0 10px 20px rgba(15, 23, 42, 0.08)",
      },
      borderRadius: {
        xl2: "1rem",
      },
    },
  },
  plugins: [],
};
