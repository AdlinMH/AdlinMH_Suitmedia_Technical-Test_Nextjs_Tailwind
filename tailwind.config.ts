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
        secondary: {
          50: "#FCEED5",
          100: "#FCEED5",
          200: "#FCEED5",
          300: "#FCEED5",
          400: "#FCEED5",
          500: "#FCEED5",
          600: "#FCEED5",
          700: "#FCEED5",
          800: "#FCEED5",
          900: "#FCEED5",
        }
      },
      fontFamily: {
        sans: ['var(--font-gilroy)'],
      },

      animation: {
        fade: 'fadeOut 1.5s ease-in-out',
      },

      keyframes: (_theme: (arg0: string) => any) => ({
        fadeOut: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      }),
    },
  },
  plugins: [],
});

export default config;
