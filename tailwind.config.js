/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
  theme: {
    extend: {
      colors: {
        
        button:'#4C956C',
        judulKecil: '#354F52',
        text : '#2C6E49' ,
        judulUtama : '#4C956C'
      },
      fontFamily :{
        titillium:'Titillium+Web',
        montserrat : 'Montserrat'
      }
    },
  },
  plugins: [],
}
