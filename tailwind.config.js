/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        // Custom color variables
        dark: "#4A4A4A",
        primary: "var(--primary, #3b82f6)",
        secondary: "var(--secondary, #64748b)",
        accent: "var(--accent, #f59e0b)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["Fira Code", "monospace"],
      },
      spacing: {
        18: "4.5rem",
        88: "22rem",
        128: "32rem",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.3s ease-out",
        "bounce-slow": "bounce 2s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      transitionProperty: {
        width: "width",
        height: "height",
        spacing: "margin, padding",
      },
      screens: {
        xs: "475px",
        "3xl": "1600px",
      },
    },
  },
  plugins: [
    // Add any Tailwind plugins here
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
  ],
};
