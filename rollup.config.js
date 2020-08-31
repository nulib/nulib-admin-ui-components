import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import replace from "@rollup/plugin-replace";
import pkg from "./package.json";
import { terser } from "rollup-plugin-terser";

import react from "react";
import reactDom from "react-dom";

const NODE_ENV = "production";

// CommonJS (for Node) and ES module (for bundlers) build.
let productionRollup = {
  input: "src/main.js",

  output: [
    { file: pkg.main, format: "cjs" },
    {
      file: pkg.main.replace(/\.js$/, ".min.js"),
      format: "cjs",
      plugins: [terser()],
    },
    { file: pkg.module, format: "es" },
    {
      file: pkg.browser,
      format: "umd",
      name: "nulibAdminUIComponents",
      globals: {
        react: "React",
        "react-dom": "ReactDOM",
        "@emotion/core": "core",
      },
    },
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ],
  plugins: [
    replace({
      "process.env.NODE_ENV": JSON.stringify(NODE_ENV),
    }),
    babel({
      babelHelpers: "runtime",
      babelrc: true,
      exclude: "node_modules/**",
    }),
    resolve(), // tells Rollup how to find packages in node_modules
    commonjs(), // converts node_modules packages to ES modules
  ],
};

export default productionRollup;
