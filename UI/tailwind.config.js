/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      width: {
        'mini-table': '17rem'
      }
    },
    fontFamily: {
      'heading' : ['Marcellus'],
      'body' : ['Monospace']
    }
  },
  plugins: [],
}

