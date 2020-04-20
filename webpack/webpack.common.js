const commonPaths = require("./paths");

module.exports = {
  entry: commonPaths.entryPath,
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  // resolve: {
  //   extensions: [".js", ".jsx", ".css", ".scss"],
  // },
  externals: [
    {
      react: "react",
      "react-dom": "react-dom",
      "prop-types": "prop-types",
    },
    // // Make bulma library styles to be external to current project
    // /^bulma[.]*/,
  ],
  plugins: [],
};
