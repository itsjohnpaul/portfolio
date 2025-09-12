module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        gradientBg: "gradient-bg-move 6s ease-in-out infinite",
        slideInLeft: "slide-in-left 1s cubic-bezier(.23,1,.32,1) both",
        slideInRight: "slide-in-right 1s cubic-bezier(.23,1,.32,1) .3s both",
        grow: "grow-bar 1s ease-out",
        spinSlow: "spin 10s linear infinite",
        neonBorder: "neon-border 3s ease-in-out infinite", // 🌟 New
      },
      keyframes: {
        "gradient-bg-move": {
          "0%,100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "slide-in-left": {
          "0%": { opacity: "0", transform: "translateX(-50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "slide-in-right": {
          "0%": { opacity: "0", transform: "translateX(50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "grow-bar": {
          "0%": { width: "0" },
          "100%": { width: "8rem" },
        },
        spin: {
          to: { transform: "rotate(360deg)" },
        },
        "neon-border": { // 🌟 Neon shining border
          "0%": { boxShadow: "0 0 5px #0ff, 0 0 10px #0ff" },
          "50%": { boxShadow: "0 0 20px #0ff, 0 0 40px #0ff, 0 0 60px #0ff" },
          "100%": { boxShadow: "0 0 5px #0ff, 0 0 10px #0ff" },
        },
      },
    },
  },
  plugins: [],
}
