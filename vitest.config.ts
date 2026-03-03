import { defineConfig } from "vitest/config";

const ci = Boolean(process.env.CI);

export default defineConfig({
  test: {
    reporters: ci
      ? ["tree", ["junit", { suiteName: "backend", outputFile: "junit.xml" }]]
      : ["tree"],
    coverage: {
      enabled: ci,
      provider: "v8",
      reporter: ["text", "text-summary"],
    },
  },
});
