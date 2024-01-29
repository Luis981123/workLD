/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
    'node_modules/flowbite-react/lib/esm/**/*.js',
    'node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    extend: {
      keyframes: {
        slideIn: {
          "0%": { opacity: 0, transform: "translateY(100%)" },
          "100%": { opacity: 1, transform: "translateY(0)" }
        }
      },
      animation: {
        slideIn: "slideIn .25s ease-in-out forwards var(--delay, 0)"
      },
      leading: {
        'leading-1': '1'
      },
      width: {
        '760': '46.3rem',
        '45': '45px'
      },
      maxHeight: {
        'chat' : '670px',

      },
      maxWidth: {
        'main' : '1140px'

      },
      colors: {
        'footer' : '#202942',
        'button' : '#00b2a4',
        'shaded-text' : '#8492a6',
        'button-hov' : '#069488',
        'gray-light':'#f8f9fa',
      },

      screens: {
        'zero': '1163px',
        'first': '991px',
        'second': '768px',
        'middle': '640px',
        'third' : '505px',
        '468': '468px',
        'xs': '346px',
      },
    },
    borderWidth: {
      0: '0px',
      1: '1px',
      2: '2px',
      3: '3px',
      4: '4px',
      5: '5px',
    },


    fontSize: {
      xs : '12px',
      sm: '.85rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      'xl/2':'1.35rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    }
 
  },
  plugins: [require('tailwind-scrollbar')],
}

