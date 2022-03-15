const themes = {
  primary: "var(--color-primary)",
  background: "var(--color-background)",
  darkBlue: "var(--color-dark-blue)",
}

module.exports = {
  content: {
    mode: "all",
    content: [
      "./src/**/*.tsx",
      "./src/**/*.ts",
      "./content/**/*.tsx",
      "./content/**/*.mdx",
    ],
  },
  theme: {
    extend: {
      backgroundColor: themes,
    },
  },
  plugins: [],
}
