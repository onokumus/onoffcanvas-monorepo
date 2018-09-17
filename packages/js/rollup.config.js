import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
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
      }
    ],
    plugins: [
      typescript({
        typescript: require("typescript"),
        target: "es5"
      })
    ]
  },
  {
    input: "./src/onoffcanvas.ts",
    output: [
      {
        file: pkg.browser,
        format: "umd",
        name: "OnoffCanvas",
        banner,
      }
    ],
    plugins: [
      typescript({
        typescript: require("typescript"),
        target: "es5"
      }),
      resolve(),
      commonjs({extensions: ['.js', '.ts']})
    ]
  }
];
