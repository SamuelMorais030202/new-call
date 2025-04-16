/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ignite: {
          300: "var(--color-ignite-300)",
          500: "var(--color-ignite-500)",
          700: "var(--color-ignite-700)",
          900: "var(--color-ignite-900)",
        },
      },
      fontFamily: {
        roboto: ['var(--font-roboto)', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
