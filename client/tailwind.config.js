/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0087bd",
      },
      aspectRatio: {
        "3/4": "3 / 4",
      },
    },
  },
  plugins: [],
};
