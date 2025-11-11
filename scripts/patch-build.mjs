import { transform } from "@swc/core";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const bundleCode = await fs.readFile(
  path.resolve(__dirname, "../dist/bundle.js"),
  "utf8"
);

const { code } = await transform(bundleCode, {
  jsc: {
    target: "esnext",
    transform: {
      optimizer: {
        globals: {
          envs: {
            SWC_PUBLIC_TEST: "0",
          },
        },
      },
    },
    minify: {
      compress: true,
      mangle: true,
    },
  },
  //   minify: true,
});

await fs.writeFile(path.resolve(__dirname, "../dist/bundle-patched.js"), code);
