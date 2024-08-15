const typescript = require("@rollup/plugin-typescript");
const dts = require("rollup-plugin-dts").default;

const config = [
  {
    input: "index.ts",
    output: [
      {
        file: "dist/index.js",
        format: "cjs",
      },
      {
        file: "dist/index.esm.js",
        format: "esm",
      },
    ],
    plugins: [typescript()],
    external: ["react", "react-dom", "next"],
  },
  {
    input: "index.ts",
    output: [{ file: "dist/index.d.ts", format: "es" }],
    plugins: [dts()],
  },
];

module.exports = config;
