import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#07090f",
        panel: "#10151f",
        paper: "#e8edf4",
        mist: "#9aa3b2",
        accent: "#3ec8b8",
      },
      maxWidth: {
        page: "72rem",
      },
      boxShadow: {
        glow: "0 0 80px rgba(62, 200, 184, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
