/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}", ],
  theme: {
    extend: {
      spacing: {
        '2px': '2px',
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}

