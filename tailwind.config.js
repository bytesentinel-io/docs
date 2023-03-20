module.exports = {
  content: [
    "./components/**/*.{jsx,tsx,js}",
    "./nextra-theme-docs/**/*.{js,tsx}",
    "./pages/**/*.{md,mdx}",
    "./theme.config.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#690DA6",
        primary_dark: "#281040"
      }
    },
  },
  plugins: [],
}
