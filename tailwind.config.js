/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // Sesuai file asli
  theme: {
    extend: {
      colors: {
        "primary": "#fa5a29",
        "background-light": "#f8f6f5",
        "background-dark": "#111827",
      },
      fontFamily: {
        "display": ["Space Grotesk", "sans-serif"]
      },
    },
  },
  plugins: [],
}