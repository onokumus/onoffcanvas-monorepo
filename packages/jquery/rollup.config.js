import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import typescript from "rollup-plugin-typescript";
import { uglify } from "rollup-plugin-uglify";

import pkg from "./package.json";

export default [
  {
    input: "./src/plugin.ts",
    external: ['jquery'],
    output: [
      {
        file: pkg.browser,
        globals: {
          jquery: 'jQuery',
        },
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
