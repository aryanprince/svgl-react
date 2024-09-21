import { defineConfig } from "tsup";

export default defineConfig({
  entryPoints: ["src/index.ts"],
  format: ["esm", "cjs"],
  outDir: "dist",
  dts: true,
  clean: true,
  minify: true,
});
