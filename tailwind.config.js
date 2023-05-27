/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        sm: '450px',
        md: '600px',
        lg: '950px',
        xl: '1280',
      },
      colors: {
        primary: '#c778dd',
        gray: '#abb2bf',
        background: '#282c33',
        white: '#fff',
      },
      width: {
        wlg: '80%',
        wmd: '85%',
        wsm: '90%',
      },
    },
  },
  plugins: [],
}
