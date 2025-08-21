module.exports = {
  darkMode: 'class',
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 6px rgba(0,0,0,0.1)',
      },
      borderRadius: {
        'xl': '1rem',
      }
    },
  },
  plugins: [],
};
