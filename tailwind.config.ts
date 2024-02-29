import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");

const config: Config = withMT({
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/themes/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#003459",
          100: "#003459",
          200: "#003459",
          300: "#003459",
          400: "#003459",
          500: "#003459",
          600: "#003459",
          700: "#003459",
          800: "#003459",
          900: "#003459",
        },
      },
      fontFamily: {
        sans: ['var(--font-gilroy)'],
      },
    },
  },
  plugins: [],
});

export default config;
