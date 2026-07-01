/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Palet coklat (tua -> muda) untuk tema glassmorphism SI-KATIK
        batik: {
          50: "#FAF3E9",
          100: "#F3E4CE",
          200: "#E6C9A0",
          300: "#D6AB74",
          400: "#C08A4E",
          500: "#A66F3B",
          600: "#8A5830",
          700: "#6E4526",
          800: "#4F3119",
          900: "#33200F",
          950: "#1F140A",
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "system-ui", "sans-serif"],
      },
      keyframes: {
        blob: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -40px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.95)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        blob: "blob 12s infinite ease-in-out",
        "fade-in-up": "fadeInUp 0.35s ease-out",
      },
    },
  },
  plugins: [],
};
