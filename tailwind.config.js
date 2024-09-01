/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        colorS4: "var(--colorS4)", /* Body Background */
        colorS3: "var(--colorS3)", /* navBackground, cardsBackground, inputRing */
        colorS2: "var(--colorS2)", /* btnBackground, cardsBorderColor, quizStart */
        colorS1: "var(--colorS1)", /* btnHoverBackground, navText, quizBackground  */

        bodyText: "var(--bodyText)", 
      }
    },
  },
  plugins: [],
}

