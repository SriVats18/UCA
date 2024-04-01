/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "ubuntu": ["Ubuntu Mono", "monospace"],
        "popin": ["Mochiy Pop P One", "sans-serif"]
      },
      // backgroundImage: {
      //   "bgimg": ["url('/Assets/bgimage')"]
      // }
    },
  },
  plugins: [],
}