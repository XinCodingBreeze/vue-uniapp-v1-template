import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import uniTailwind from "@uni-helper/vite-plugin-uni-tailwind";

// https://vitejs.dev/config/
export default defineConfig(async () => {
  return {
    plugins: [uni(), uniTailwind()],
    css: {
      postcss: {
        plugins: [require("tailwindcss")],
      },
    },
  };
});
