module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "public/**/*.html"],
  theme: {
    extend: {},
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
