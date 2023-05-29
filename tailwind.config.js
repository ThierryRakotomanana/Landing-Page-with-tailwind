/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      animation : {
        colorProgress : 'colorProgress 1s linear infinite' ,
      },
      keyframes : {
        colorProgress : {
          '0%': { fill: "url(#gradient-ring)"},
          '20%': { fill: "url(#gradient-ring1)"},
          '30%': { fill: "url(#gradient-ring2)"},
          '50%': { fill: "url(#gradient-ring3)"},
          '70%': { fill: "url(#gradient-ring4)"},
          '100%': { fill: "url(#gradient-ring5)" },
        }
      }
    },
  },
  plugins: [],
}