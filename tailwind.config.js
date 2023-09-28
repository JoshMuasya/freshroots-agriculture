/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'light-green': '#F0FFF0',
        'barn-red': '#7C0A02',
        'bronze-yellow': '#737000',
        'laser-lemon': '#FEFE22',
      },

      screens: {
        's': '300px',
        'sm': '430px',
        'md': '650px',
        'm': '895px',
        'l': '1030px',
        'xl': '1280px',
        '2xl': '1536px',
      },

      fontSize: {
        's': '12px',
        'xs': '14px',
        'sx': '16px',
        'lm': '20px',
        'm': '24px',
        'l': '35px',
        'ml': '40px',
        'xl': '50px',
      },

      fontFamily: {
        'overlook': 'Overlock, cursive',
        'rye': 'Rye, cursive',
        'armata': 'Armata, sans-serif',
      }
    },
  },
  plugins: [],
}
