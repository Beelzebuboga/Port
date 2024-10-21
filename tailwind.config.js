/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,jsx}",
    "./src/**/**/*.{html,jsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        lato: ['Lato', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        arial: ['Arial', 'Helvetica', 'sans-serif'],
        georgia: ['Georgia', 'Times New Roman', 'serif'],
        script: ['Lobster', 'Pacifico', 'cursive'],
        display: ['Oswald', 'cursive'],
        serif: ['Montserrat', 'Arial', 'sans-serif'],
        Merriweather: ['Merriweather', 'Georgia', 'serif'],
        Playfair: ['Playfair Display', 'cursive'],
        pacifico: ['Pacifico', 'cursive'],
        roboto: ['Roboto', 'sans-serif']
         },
      colors:{
        jonquil: '#F9C80E',  // Custom color names based on your palette
        eerieblack: '#262626',
        emerald: '#0CCE6B',
        timberwolf: '#D8D4D5',
        babypowder: '#FFFFFC',
        seagreen: '#058C42',
        pakistangreen: '#04471C',
        cream: '#FFFDD0',
        blackish: '#1a1a1a'
      }
    },
  
  },
  plugins: [],
}

