import { defineConfig } from "vite"
import solidPlugin from "vite-plugin-solid"

export default defineConfig({
  plugins: [solidPlugin()],
  base: "/spa_only_static/",
  build: {
    outDir: "docs",
  },
})
