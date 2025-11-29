/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        skyBlue: "#6AA6FF",
        warmYellow: "#FFCC66",
        softPink: "#FF8A8A",
      },
    },
  },
  plugins: [],
};
