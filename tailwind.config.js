module.exports = {
  content: [
    './src/**/*.tsx',
    './src/**/*.styled.ts',
    './src/**/*.styled.tsx',
  ],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        state1:  "var(--state1)",
        state2: "var(--state2)",
        "state1-dark": "var(--state1-dark)",
        "state2-dark": "var(--state2-dark)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
