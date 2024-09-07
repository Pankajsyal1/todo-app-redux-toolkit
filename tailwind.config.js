/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "320px",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1400px",
    },
    container: {
      center: true,
      screens: {
        xs: "100%",
        sm: "540px",
        md: "720px",
        lg: "960px",
        xl: "1140px",
        "2xl": "1320px",
      },
    },
    extend: {
      colors: {
        primary: {
          50: "#e6fff3", // Very light shade
          100: "#b3ffe0", // Light shade
          200: "#80ffcc", // Slightly lighter
          300: "#4dffb8", // Light-mid shade
          400: "#1aff99", // Mid shade
          500: "#00d563", // Base shade
          600: "#00b04f", // Mid-dark shade
          700: "#008b3b", // Dark shade
          800: "#006727", // Very dark shade
          900: "#004013", // Extremely dark shade
          DEFAULT: "#00d563", // Base primary color
          light: "#33de79", // Lighter shade
          dark: "#00b04f", // Darker shade
        },
      },
      fontFamily: {
        suse: ['"SUSE"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
