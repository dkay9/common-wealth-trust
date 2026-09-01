import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F5F1E8",
        ink: "#1C1C1A",
        terracotta: {
          DEFAULT: "#C1502E",
          dark: "#9C3D22",
          light: "#DE8A6A",
        },
        forest: {
          DEFAULT: "#1F3A34",
          dark: "#142722",
          light: "#2E534A",
        },
        sand: "#EBE3D3",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-worksans)", "sans-serif"],
      },
      maxWidth: {
        "8xl": "90rem",
      },
    },
  },
  plugins: [],
};

export default config;
