module.exports = {
  content: ["./src/**/*.{html,js}", "./public/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'cambo': ['Cambo', 'serif'],
      'titillium': ['Titillium Web', 'sans-serif'],
    },
    extend: {
      colors: {
        'primary': '#446674'
      }
    },
    container: {
      center: true,
    },
  },
  plugins: [],
}
