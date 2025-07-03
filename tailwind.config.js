/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideInOut: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '10%': { transform: 'translateX(0)', opacity: '1' },
          '90%': { transform: 'translateX(0)', opacity: '1' },
          '100%': { transform: 'translateX(-100%)', opacity: '0' },
        },
      },
      animation: {
        slideInOut: 'slideInOut 8s linear infinite',
      },
    },
    fontFamily: {
      'sans': ['Itim'],
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dracula", "nord"],
  }
}
