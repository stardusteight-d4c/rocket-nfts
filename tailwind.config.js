/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  mode: 'jit',
  theme: {
    extend: {
      screens: {
        md: { max: '1230px' },
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        marquee: 'marquee 25s linear infinite',
        marquees: 'marquees 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100vw)' },
          '100%': { transform: 'translateX(-110%)' },
        },
        marquees: {
          '0%': { transform: 'translateX(-110%)' },
          '100%': { transform: 'translateX(100vw)' },
        },
      },
      fontFamily: {
        sans: 'Montserrat, sans-serif',
      },
      colors: {
        black: {
          100: '#5A5757',
          200: '#252525',
          700: '#0E0E0E',
          900: '#000000',
        },
        red: {
          300: '#FF5B50',
        },
      },
    },
  },
  plugins: [],
}
