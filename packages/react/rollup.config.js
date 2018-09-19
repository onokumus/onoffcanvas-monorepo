import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import typescript from "rollup-plugin-typescript";
import { uglify } from "rollup-plugin-uglify";

import pkg from "./package.json";

export default [
  {
    input: "./src/index.ts",
    external: ["react"],
    output: [
      {
        file: pkg.browser,
        format: "umd",
        name: "OnoffCanvas",
        globals: {
          react: "React"
        },
        sourcemap: true
      }
    ],
    plugins: [
      typescript({
        typescript: require("typescript"),
        target: "es5"
      }),
      commonjs({ extensions: [".js", ".ts"] }),
      resolve(),
      // uglify()
    ]
  }
];
