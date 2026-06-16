/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#F6F1EC",
        ink: "#1A1A1A",
        accent: "#F07C4C",
        softpink: "#F5C9B9",
        softyellow: "#F4E1A7",
      },
      fontFamily: {
        display: ['"Instrument Serif"', "serif"],
        sans: ['Inter', "system-ui", "sans-serif"],
      },
      animation: {
        "slow-spin": "spin 24s linear infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "jitter": "jitter 3s ease-in-out infinite",
        "fade-in-up": "fadeInUp 1s ease-out both",
        "fade-in": "fadeIn 1.2s ease-out both",
        "marquee": "marquee 22s linear infinite",
        "pulse-soft": "pulseSoft 4s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translate(0,0) rotate(0deg)" },
          "50%": { transform: "translate(20px,-15px) rotate(4deg)" },
        },
        jitter: {
          "0%,100%": { transform: "rotate(-2deg) translate(0,0)" },
          "25%": { transform: "rotate(3deg) translate(4px,-2px)" },
          "50%": { transform: "rotate(-4deg) translate(-3px,3px)" },
          "75%": { transform: "rotate(2deg) translate(2px,2px)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseSoft: {
          "0%,100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
        },
      },
    },
  },
  plugins: [],
};
