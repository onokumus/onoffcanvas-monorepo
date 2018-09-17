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
    input: [
      "./src/interface.ts",
      "./src/constants.ts",
      "./src/util.ts",
      "./src/index.ts",
    ],
    output: [
      {
        dir: "lib/modules",
        format: "esm",
        banner,
      },
      {
        dir: "lib/cjs",
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
