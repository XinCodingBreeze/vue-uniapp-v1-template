/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./src/**/*.{html,js,ts,vue}"],
  corePlugins: {
    preflight: false, // 禁用 preflight，避免真机 input 字符间距渲染 bug
  },
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
