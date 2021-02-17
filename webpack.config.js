const path = require("path")

module.exports = {
    resolve: {
        fallback: {
            // assert: false,
            // util: false,
        }
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'validate'),
   },
}
