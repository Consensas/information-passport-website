const path = require("path")
const webpack = require("webpack")

module.exports = {
    resolve: {
        fallback: {
            util: require.resolve("util/"),
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": 0,
            "process.env.NODE_DEBUG": 0,
        })
    ],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'validate'),
   },
}
