import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                main: "#4C5843",
                secondary: "#3D4635",
                third: "#59674F",
                letter: "#E9F0E2",
                selectedLetter: "#AEB07C",
                inactiveLetter: "#737E6A",
            },
        },
    },
    plugins: [],
};
export default config;
