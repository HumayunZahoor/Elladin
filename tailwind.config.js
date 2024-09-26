/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-gray': '#292D32',
        'custom-orange': '#FC6C04',
        'custom-grayli': '#929194',
      },
    },
  },
  plugins: [],
}

