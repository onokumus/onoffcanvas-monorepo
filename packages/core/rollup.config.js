import typescript from "rollup-plugin-typescript";

import pkg from "./package.json";

const banner = `/*!
* ${pkg.name} - v${pkg.version}
* ${pkg.description}
* ${pkg.homepage}
*
* Made by ${pkg.author}
* Under ${pkg.license} License
*/`;

export default [
  {
    input: "./src/index.ts",
    output: [
      {
        file: pkg.module,
        format: "esm",
        banner,
      },
      {
        file: pkg.main,
        format: "cjs",
        banner,
      },
    ],
    plugins: [
      typescript({
        typescript: require("typescript"),
        target: "ES5"
      })
    ],
    experimentalCodeSplitting: true
  }
];
