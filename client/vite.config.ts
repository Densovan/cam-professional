import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";

export default defineConfig({
  plugins: [solidPlugin()],
  server: {
    port: import.meta.env.VITE_VARIABLE_PORT,
  },
  build: {
    target: "esnext",
  },
});
