// Following: https://medium.com/otorio/build-a-react-component-library-with-antd-and-styleguidist-5927931d62c6

const webpackMerge = require("webpack-merge");
const common = require("./webpack/webpack.common");

const envs = {
  development: "dev",
  production: "prod",
};

const env = envs[process.env.NODE_ENV || "development"];

// eslint-disable-next-line import/no-dynamic-require

// TODO: Figure out why webpack.prod.js isn't working
//const envConfig = require(`./webpack/webpack.${env}.js`);
const envConfig = require(`./webpack/webpack.dev.js`);

module.exports = webpackMerge(common, envConfig);
