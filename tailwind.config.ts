// App's External Imports
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  plugins: [require("tailgrids/plugin")],
  content: ["./src/app/**/*.tsx", "./src/components/**/*.tsx"],
};

export default config;
