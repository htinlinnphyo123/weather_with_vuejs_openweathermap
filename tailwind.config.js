module.exports = {
  content: [
    './src/App.vue',    
    './src/components/Navbar.vue',
    './src/components/Body.vue',
    './src/components/Loader.vue',
    './src/components/NoInfo.vue',
    './src/components/WeatherInfo.vue'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
