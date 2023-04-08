/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}", ],
  theme: {
    extend: {
      spacing: {
        '2px': '2px',
        '45%': '45%',
      },
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif']
    }
  },
  plugins: [require("@tailwindcss/forms")],
}

