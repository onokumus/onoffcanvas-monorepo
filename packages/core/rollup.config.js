import typescript from "rollup-plugin-typescript";
import { uglify } from "rollup-plugin-uglify";

import pkg from "./package.json";

export default [
  {
    input: "./src/index.ts",
    output: [
      {
        file: pkg.browser,
        format: "umd",
        name: "occore",
        sourcemap: true
      }
    ],
    plugins: [
      typescript({
        typescript: require("typescript"),
        tslib: require('tslib'),
        target: "es5"
      }),
      // uglify()
    ]
  }
];
