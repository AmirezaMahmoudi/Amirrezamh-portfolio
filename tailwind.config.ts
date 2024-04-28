import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        pantone: 'hsl(270, 94%, 87%)',
        white28: 'hsl(0, 100%, 100% , 0.20)',
        white13: 'hsla(0, 100%, 100% , 0.10)',
        lightGray: 'hsla(270, 4%, 10%, 0.50)',
        darkGray: 'hsla(270, 4%, 10%, 1)',
      },
    },
  },
  plugins: [],
};
export default config;
