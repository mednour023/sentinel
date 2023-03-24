const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "cheap-module-source-map",
  entry: {
    popup: path.resolve("./src/popup/popup.tsx"),
    options: path.resolve("./src/options/options.tsx"),
    background: path.resolve("./src/background/background.ts"),
    contentScript: path.resolve("./src/contentScript/index.tsx"),
  },
  module: {
    rules: [
      {
        use: "ts-loader",
        test: /\.tsx$/,
        exclude: /node_module/,
      },
      {
        use: ["style-loader", "css-loader"],
        test: /\.css$/i,
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: path.resolve("./src/manifest.json"), to: path.resolve("dist") },
        { from: path.resolve("./src/icons/"), to: path.resolve("dist/icons") },
        { from: path.resolve("./src/assets/"), to: path.resolve("dist/assets") },
      ],
    }),
    ...getHtmlPlugins(["popup", "options"]),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "[name].js",
  },
  optimization: {
    splitChunks: {
      // chunks: "all",
      chunks(chunk) {
        return chunk.name !== "contentScript";
      },
    },
  },
};
function getHtmlPlugins(chunks) {
  return chunks.map(
    (chunk) =>
      new HtmlPlugin({
        title: "React Extension",
        filename: `${chunk}.html`,
        chunks: [chunk],
      })
  );
}
