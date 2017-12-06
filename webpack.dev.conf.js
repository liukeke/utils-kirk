const webpack = require('webpack');
const opn = require('opn');
const merge = require('webpack-merge');
const path = require("path");
const baseWebpackConfig = require("./webpack.base.conf");
const eslintFormatter = require('react-dev-utils/eslintFormatter');
let config = merge(baseWebpackConfig, {
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development'),
            }
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: [
                    'cache-loader',
                    'babel-loader',
                ],
                include: [
                    path.resolve(__dirname, "src"),
                ],
                exclude: [
                    path.resolve(__dirname, "node_modules")
                ],
            },
            {
                test: /\.(js|jsx)$/,
                enforce: 'pre',
                use: [
                    {
                        options: {
                            formatter: eslintFormatter,
                            eslintPath: require.resolve('eslint'),
                            // @remove-on-eject-begin
                            baseConfig: {
                                extends: [require.resolve('eslint-config-react-app')],
                            },
                            //ignore: false,
                            useEslintrc: false,
                            // @remove-on-eject-end
                        },
                        loader: require.resolve('eslint-loader'),
                    },
                ],
                include: [
                    path.resolve(__dirname, "src")
                ],
                exclude: [
                    path.resolve(__dirname, "node_modules")
                ],
            },
        ]
    },
    devServer: {
        host: '0.0.0.0',
        port: 8001,
        hot: true,
        inline: true,
        contentBase: path.resolve(__dirname, 'build'),
        historyApiFallback: true,
        disableHostCheck: true,
        after() {
            opn('http://localhost:' + this.port);
        }
    }
});
module.exports = config;