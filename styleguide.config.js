// const path = require("path");

// module.exports = {
//   webpackConfig: {
//     entry: "./src/index.js",
//     output: {
//       path: path.resolve("lib"),
//       filename: "index.js",
//       library: "NULibAdminUIComponents",
//       libraryTarget: "umd",
//       publicPath: "/lib/",
//       umdNamedDefine: true,
//     },
//     module: {
//       rules: [
//         {
//           test: /\.(js|jsx)$/,
//           exclude: /node_modules/,
//           loader: "babel-loader",
//         },
//         // Other loaders that are needed for your components
//         {
//           test: /\.s[ac]ss$/i,
//           use: ["style-loader", "css-loader", "sass-loader"],
//         },
//       ],
//     },
//     resolve: {
//       alias: {
//         react: path.resolve(__dirname, "./node_modules/react"),
//         "react-dom": path.resolve(__dirname, "./node_modules/react-dom"),
//       },
//     },
//     externals: {
//       // Don't bundle react or react-dom
//       react: {
//         commonjs: "react",
//         commonjs2: "react",
//         amd: "React",
//         root: "React",
//       },
//       "react-dom": {
//         commonjs: "react-dom",
//         commonjs2: "react-dom",
//         amd: "ReactDOM",
//         root: "ReactDOM",
//       },
//     },
//   },
// };
