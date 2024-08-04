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
        secondary:"#F0A8D0",
        darkBg: "#131424"
      },
      backgroundImage:{
        "gradient-cover":
          "linear-gradient(90.21deg, rgb(255, 198, 198) -5.91%, rgb(255, 235, 212) 111.58%)"
      },
    },
  },
  plugins: [],
};
export default config;
