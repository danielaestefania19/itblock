/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        machina: ['Neue Machina', 'sans-serif'],
        karma: ['Karma', 'serif'],
        aeonik: ['Aeonik' , 'serif'],
        dosis: ["Dosis", 'sans-serif'],
        interTight: ['"Inter Tight"', 'sans-serif'],
        inter: ["Inter", 'sans-serif'],
      },
    },
  },
  plugins: [],
}
