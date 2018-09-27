import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import typescript from "rollup-plugin-typescript";

import pkg from "./package.json";

export default [
  {
    input: "./src/onoffcanvas.ts",
    output: [
      {
        file: pkg.browser,
        format: "umd",
        name: "OnoffCanvas",
        sourcemap: true
      }
    ],
    plugins: [
      typescript({
        typescript: require("typescript"),
        target: "es5"
      }),
      resolve(),
      commonjs({extensions: ['.js', '.ts']}),
      // uglify()
    ]
  }
];
