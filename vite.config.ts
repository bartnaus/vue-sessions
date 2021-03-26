import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import viteStylelint from "@amatlash/vite-plugin-stylelint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), viteStylelint()],
});
