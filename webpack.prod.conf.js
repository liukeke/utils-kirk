const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseWebpackConfig = require("./webpack.base.conf");

let config = merge(baseWebpackConfig, {
    plugins: [
        // 设置生产环境
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production'),
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            output: {
                comments: false/*删除版权信息*/
            },
            compress: {
                warnings: false
            }
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            }
        ]
    }
});
module.exports = config;
