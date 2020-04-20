// TODO: Invesigate this article
// https://adamrackis.dev/css-modules/

module.exports = {
  mode: "development",
  devtool: "source-map",
  output: {
    filename: "[name].js",
    chunkFilename: "[name].js",
    libraryTarget: "umd",
  },
  plugins: [],
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.(js|jsx)$/,
        loader: "eslint-loader",
        exclude: /(node_modules)/,
        options: {
          cache: true,
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          // {
          //   loader: "css-loader",
          //   options: {
          //     sourceMap: true,
          //     modules: {
          //       localIdentName: "[path][name]__[local]",
          //     },
          //   },
          // },
          "sass-loader",
        ],
      },
    ],
  },
};
