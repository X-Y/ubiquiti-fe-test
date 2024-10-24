import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        neutral: {
          "01": "rgb(249, 250, 250)",
          "02": "rgb(244, 245, 246)",
          "03": "rgb(237, 237, 240)",
          "10": "rgb(80, 86, 94)",
        },
        blue: {
          "06": "rgb(0, 111, 255)",
          "07": "rgb(0, 89, 204)",
        },
        red: {
          "03": "rgb(249, 176, 178)",
          "06": "rgb(240, 58, 62)",
        },
      },
      fontWeight: {
        regular: "100",
        bold: "400",
      },
      textColor: {
        fade: "rgb(189, 189, 189)",
        light: "rgba(0, 0, 0, 0.45)",
        medium: "rgba(0, 0, 0, 0.65)",
        dark: "rgba(0, 0, 0, 0.85)",
        text: {
          "3": "rgb(128, 136, 147)",
        },
      },
    },
  },
  plugins: [],
};
export default config;
