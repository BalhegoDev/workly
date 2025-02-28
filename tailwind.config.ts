import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primaryBlue: "#0084FF",
        secondaryBlue: "#A9E8FF",
        primaryBlack: "rgba(0,0,0,0.7)"
      },
      fontFamily: {
        
      }
    },
  },
  plugins: [],
} satisfies Config;