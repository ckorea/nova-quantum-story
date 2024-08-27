/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#f5f8f5',
          100: '#e6ede6',
          200: '#c2d6c2',
          300: '#9ebe9e',
          400: '#7aa67a',
          500: '#568e56',
          600: '#457145',
          700: '#345534',
          800: '#233823',
          900: '#121c12',
        },
        orange: {
          50: '#fff5f2',
          100: '#ffe6de',
          200: '#ffc7b8',
          300: '#ffa391',
          400: '#ff7a6a',
          500: '#ff5142',
          600: '#e6390a',
          700: '#b92d08',
          800: '#8c2206',
          900: '#5f1704',
        },
      },
      fontFamily: {
        serif: ['Merriweather', 'serif'],
        display: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}