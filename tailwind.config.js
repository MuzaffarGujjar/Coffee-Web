/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brightColor: "#ab6b2e",
        backgroungColor: "#fde9cc",
      },
    },
  },
  plugins: [],
}

