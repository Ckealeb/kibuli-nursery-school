
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#33C3F0",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#D3E4FD",
          foreground: "#1a1a1a",
        },
        accent: {
          DEFAULT: "#FEF7CD",
          foreground: "#1a1a1a",
        },
        muted: {
          DEFAULT: "#F8FAFC",
          foreground: "#64748B",
        },
      },
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
      },
      keyframes: {
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "zoom-out": {
          "0%": { transform: "scale(0.5)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      animation: {
        "float": "float 3s ease-in-out infinite",
        "fade-up": "fade-up 0.5s ease-out forwards",
        "zoom-out": "zoom-out 8s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
