module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, 
  theme: {
    extend: {  fontFamily: {
      'bebas':['Bebas Neue','cursive'],
      'roboto':['Roboto', 'sans-serif']
    }
},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
