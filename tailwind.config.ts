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
        primaryBlue: "#0056A8",
        secondaryBlue: "#151A6C",
        textBlue: "#34A1B9",
        primaryBlack: "#1C1B1B"
      },
      fontFamily: {
        alumni: ["Alumni Sans"],
        nunito: ["Nunito Sans"]
      }
    },
  },
  plugins: [],
} satisfies Config;