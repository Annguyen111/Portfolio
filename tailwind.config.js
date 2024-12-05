/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        'trans-rotate': {
          '50%': { transform: 'rotate(10deg)' },
        },
        'trans-scale': {
          '0%': {
            transform: 'scale(1)'
          },
          '50%': {
            transform: 'scale(1.4)'
          },
          '100%': {
            transform: 'scale(1.5)',
            opacity: '0'
          },
        },
        'trans-width': {
          '50%': { width: '100%', display: 'block' }
        },
        'trans-up': {
          '50%': {
            transform: 'translateY(-10px)'
          }
        }
      },
      animation: {
        'trans-rotate': "trans-rotate 2s linear infinite",
        'trans-scale': "trans-scale 2s linear infinite",
        'trans-width': "trans-width 10s linear infinite",
        'trans-up': "trans-up 2s linear infinite",
      },
      colors: {
        'grey': '#999999',
        'primary': '#e0874b',
        'dark_blue': '#000d27',
        'dark_grey': '#414141',
        'light_black': '#262525',
        'black_little': '#1d1d1d',
        'star_ratting': '#ffa311'
      },
    },
    fontFamily: {
      caveat: ["Caveat", 'cursive'],
    },
  },
  plugins: [],
};
