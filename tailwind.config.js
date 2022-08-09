/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container:{
      center:true,
      padding:'20px',
    },
    extend: {
      colors:{
        primary:'#a855f7',
        dark:'#171717',
        grey:'#525252'
      },
      screens:{
        '2xl':'1320px',
        'xl':'1280',
      },
    },
  },
  plugins: [],
}
