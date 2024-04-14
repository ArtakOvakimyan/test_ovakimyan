const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { EnvironmentPlugin } = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
import { EnvVariables } from './webpack/type/types';

module.exports = (env: EnvVariables) => {
    return {
        entry: path.join(__dirname, 'src', 'index.tsx'),
        mode: 'development',
        devServer: {
            historyApiFallback: true,
            compress: true,
            hot: true,
            port: 7070,
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
                {
                    test: /\.css$/i,
                    use: [MiniCssExtractPlugin.loader, "css-loader"],
                }
            ],
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js'],
        },
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'dist'),
            clean: true
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.join(__dirname, 'public', 'index.html')
            }),
            new EnvironmentPlugin({
                TOKEN: env.TOKEN
            }),
            new MiniCssExtractPlugin()
        ]
    }
};