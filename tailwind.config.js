/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}", './index.html', './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
      'blue-200': '#3d85c6',
      'blue-600': '#014ba0',
      'red-200' : '#f44336',
      'white-100' : '#ffffff',
    },
    extend: {},
    screens: {
      'xxsm': '320px',
      'xsm': '375px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
}

