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
        target: "ES5"
      })
    ]
  },
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
        banner,
        name: "OnoffCanvas"
      }
    ],
    plugins: [
      typescript({
        typescript: require("typescript"),
        target: "ES5"
      }),
      resolve(),
      commonjs({extensions: ['.js', '.ts']})
    ]
  }
];
