/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        // Custom color variables
        orange: "var(--orange)",
        lightOrange: "var(--lightOrange)",
        dark: "var(--dark)",
        lightDark: "var(--lightDark)",
        gray: "var(--gray)",
        lightGray: "var(--lightGray)",
        extraLightGray: "var(--extraLightGray)",
        darkGray: "var(--darkGray)",
        grayMedium: "var(--grayMedium)",
        lightSkyBlue: "var(--lightSkyBlue)",
        brightSkyBlue: "var(--brightSkyBlue)",
        tealBlue: "var(--tealBlue)",
        oliveGreen: "var(--oliveGreen)",
        lightOliveGreen: "var(--lightOliveGreen)",
        extralightOrange: "var(--extralightOrange)",
        verylightOrange: "var(--verylightOrange)",
        majesticPurple: "var(--majesticPurple)",
        danger: "var(--danger)",
        // Additional theme colors
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
