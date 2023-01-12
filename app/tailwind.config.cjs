/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'chat-window': "url('/img/bg-chat-window.png')"
      }
    },
    colors: {
      primary: '#111b21',
      secondary: '#202C33',
      selected: '#2A3942',
      icon: '#8696A0',
      text: '#DFECEF'
    }
  },
  plugins: [],
}