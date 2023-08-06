const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const assetsPath = `./src/assets`;

module.exports = {
  entry: "./src/index.jsx",
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: "babel-loader",
        },
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    filename: "[name].[fullhash].js",
    path: path.join(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${assetsPath}/index.html`,
    }),
  ],
};
