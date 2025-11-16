import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'purple-dark': '#4B2E83',
        'purple-light': '#6B46C1',
        'purple-sidebar': '#4B2E83',
      },
    },
  },
  plugins: [],
};
export default config;

