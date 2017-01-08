const ngAnnotatePlugin = require('ng-annotate-webpack-plugin');

module.exports = {
    entry: {
      app: [
        './app/app.js'
      ]
    },
    output: {
        path: './bin',
        filename: '[name].bundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }, {
                test: /\.html$/,
                loader: "html"
            }, {
                test: /\.scss$/,
                loaders: ["style-loader", "css-loader", "sass-loader"]
            }, {
                test: /\.css$/,
                loaders: ["style-loader", "css-loader"]
            }
        ]
    },
    devtool: "#inline-source-map",
    plugins: [
      new ngAnnotatePlugin({
            add: true,
            // other ng-annotate options here
        })]
}
