module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './content/posts/*.{mdx}',
  ],
  purge: ['./components/**/*.tsx', './pages/**/*.tsx', './content/posts/*.mdx'],
  theme: {
    extend: {
      fontFamily: {
        hand: ['Nanum Pen Script', 'cursive'],
        inter: ['Inter', 'cursive'],
        'space-mono': ['Space Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
