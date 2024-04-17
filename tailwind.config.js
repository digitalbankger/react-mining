/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': {'max': '674px'},
      },
      fontFamily: {
        mont: ['Montserrat', 'sans-serif'],
        exo: ["'Exo 2'", 'sans-serif'],
      },
      fontSize: {
        '5/5xl': '3.5rem',
        '5/2xl': '3.2rem',
        '4/5xl': '2.5rem',
        '2/5xl': '1.7rem'
      },
      textColor: {
        'lead': 'rgb(255 255 255 / 90%)',
        'lead-dark': '#252F43',
        'lead-sec': '#566e7a',
        'bluegen': "#3579F4",
        'dark-lead': '#5b6882'
      },
      backgroundImage: {
        'grad': 'linear-gradient(220deg, #015c3b 0%, #112c1d 100%)',
        'cart': 'linear-gradient(220deg, #8910a705 0%, #4349c514 100%)',
        'hovergrad': 'linear-gradient(220deg, #4349c5 0%, #b113d8 100%)'
      },
      backgroundColor: {
        'light': '#044a3029',
        'bordo': '#0d0212',
        'bluegen': "#3579F4",
        'lead': "#fafcff",
        'dark': '#252F43',
        'neutral': '#f0f5ff' 
      },
      borderColor: {
        'bluegen': '#3579F4',
        'sec': '#566e7a',
        'sec-500': '#566e7a24',
        'lead': '#959aa557'
      },
      borderWidth: {
        '1': '1px'
      },
      boxShadow: {
        'my-shad': '0 4px 10px -1px #47526521, 0 2px 4px -2px #47526521',
        'my-shad-lg': '0 4px 16px -1px #47526521, 0 2px 4px -2px #47526521',
        'l-shad': '0 4px 8px -1px #47526514, 0 2px 4px -2px #4752651a'
      },
      backgroundPosition: {
        'top-44': 'center top 44%',
      },
      zIndex: {
        '1': '1'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

