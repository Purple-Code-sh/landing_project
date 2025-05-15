/** @type {import('tailwindcss').Config} */
export default {
  content: ['./*.html', './src/**/*.js', './src/*.js'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        md: '2rem',
        lg: '2.5rem',
        xl: '3rem',
      },
    },
    extend: {
      colors: {
        primary: '#000000',
      },
      textShadow: {
        DEFAULT: '2px 2px 4px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-shadow': {
          'text-shadow': '2px 2px 4px rgba(0, 0, 0, 0.5)',
        },
      });
    },
  ],
};
