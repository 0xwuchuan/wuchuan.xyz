/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        satoshi: ["var(--font-satoshi), var(--font-inter)"],
        chivo: ["var(--font-chivo)"],
      },
      colors: {
        // Flexoki Base Colors
        tx: {
          light: "#100F0F",  // black in light theme
          dark: "#CECDC3",   // base-200 in dark theme
        },
        "tx-2": {
          light: "#6F6E69",  // base-600 in light theme
          dark: "#878580",   // base-500 in dark theme
        },
        "tx-3": {
          light: "#B7B5AC",  // base-300 in light theme
          dark: "#575653",   // base-700 in dark theme
        },
        bg: {
          light: "#FFFCF0",  // paper in light theme
          dark: "#100F0F",   // black in dark theme
        },
        "bg-2": {
          light: "#F2F0E5",  // base-50 in light theme
          dark: "#1C1B1A",   // base-950 in dark theme
        },
        ui: {
          light: "#E6E4D9",  // base-100 in light theme
          dark: "#282726",   // base-900 in dark theme
        },
        "ui-2": {
          light: "#DAD8CE",  // base-150 in light theme
          dark: "#343331",   // base-850 in dark theme
        },
        "ui-3": {
          light: "#CECDC3",  // base-200 in light theme
          dark: "#403E3C",   // base-800 in dark theme
        },
        // Flexoki Accent Colors
        red: {
          light: "#AF3029",
          dark: "#D14D41",
        },
        orange: {
          light: "#BC5215", 
          dark: "#DA702C",
        },
        yellow: {
          light: "#AD8301",
          dark: "#D0A215", 
        },
        green: {
          light: "#66800B",
          dark: "#879A39",
        },
        cyan: {
          light: "#24837B",
          dark: "#3AA99F",
        },
        blue: {
          light: "#205EA6",
          dark: "#4385BE",
        },
        purple: {
          light: "#5E409D",
          dark: "#8B7EC8",
        },
        magenta: {
          light: "#A02F6F", 
          dark: "#CE5D97",
        },
        // shadcn/ui compatibility
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
