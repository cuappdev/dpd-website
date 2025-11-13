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
        purple: {
          primary: '#8B5CF6',
          dark: '#7C3AED',
        },
        orange: {
          primary: '#F97316',
          dark: '#EA580C',
        },
        red: {
          primary: '#EF4444',
          dark: '#DC2626',
        },
      },
    },
  },
  plugins: [],
}

