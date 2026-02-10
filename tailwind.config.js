/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        stax: {
          ink: '#0B1221',
          slate: '#8FA2C9',
          accent: '#63F3AF',
          glow: '#44C7FF',
          panel: '#121B2F'
        }
      },
      boxShadow: {
        card: '0 20px 45px rgba(5, 11, 26, 0.35)'
      }
    },
  },
  plugins: [],
};
