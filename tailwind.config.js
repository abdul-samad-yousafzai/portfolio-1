/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          950: "#0D0D0D",
        },
        accent: "#C8FF00",
        "neutral-light": "#F5F0EB",
      },
      boxShadow: {
        glow: "0 0 20px rgba(200,255,0,0.4)",
      },
    },
  },
  plugins: [],
}