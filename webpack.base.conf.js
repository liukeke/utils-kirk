const path = require("path");
let config = {
    entry: {
        index: './src/index.js',
        utils: './src/utils.js',
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js',
    },
};
module.exports = config;
