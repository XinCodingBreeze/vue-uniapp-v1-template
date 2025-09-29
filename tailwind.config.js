/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./src/**/*.{html,js,ts,vue}"],
  theme: {
    extend: {
      utilities: {
        ".center": {
          display: "flex",
          "justify-content": "center",
          "align-items": "center",
        },
      },
    },
  },
  plugins: [],
};
