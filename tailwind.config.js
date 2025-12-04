/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
theme: {
  extend: {
    colors: {
      primary: "#2563eb", // or your exact blue
      primaryHover: "#3b82f6", 
    },
  },
},
  plugins: [],
};
