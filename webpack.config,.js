// webpack.config.js
const path = require("path");

module.exports = {
  entry: "./src/index.js", // Your main entry file
  output: {
    path: path.resolve(__dirname, "dist"), // Output directory
    filename: "bundle.js", // Name of the bundled file
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "swc-loader",
          options: {
            env: {
              targets: "defaults",
              debug: true,
            },
            jsc: {
              experimental: {
                plugins: ["@swc/plugin-swc-sdk"],
              },
            },
          },
        },
      },
    ],
  },
};
