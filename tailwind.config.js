/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Georgia', '"Times New Roman"', 'Times', 'serif'],
        sans: ['Georgia', '"Times New Roman"', 'Times', 'serif'],
        mono: ['Georgia', '"Times New Roman"', 'Times', 'serif'],
      },
    },
  },
  plugins: [],
};
