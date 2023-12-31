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
        'background': '#1c2831', //background color
        'text': '#d4fcf2', // text color
        'pale-text':'#a4c5c0',
        'link-active': '#b5f59b', // active link
      },
    },
  },
  plugins: [],
}
