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
        bg: '#FEFBF6', // Background color
        textPrimary: '#7F5283', // Primary text color
        textDark: '#000000', // Black text color for alternative use
        ctaBg: '#3D3C42', // CTA background color
        ctaHover: '#3F2E3E', // Suggested hover color for CTA
        minor: '#A6D1E6', // Color for minor details
      },
    },  
  },
  plugins: [],
};
export default config;
