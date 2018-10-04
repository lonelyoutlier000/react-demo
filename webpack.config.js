const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    "mode": "production",
    "entry": "./src/index.js",
    "output": {
        "path": __dirname + '/build',
        "filename": "[name].[chunkhash:8].js"
    },
    "module": {
        "rules": [
            {
                test: /\.(svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {}
                    }
                ]
            },
            {
                "test": /\.(js|jsx)$/,
                "exclude": /node_modules/,
                "use": {
                    "loader": "babel-loader",
                    "options": {
                        "presets": [
                            "env",
                            "react"
                        ]
                    }
                }
            },
            {
                "test": /\.scss$/,
                "use": [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    "plugins": [
        new CleanWebpackPlugin(['build']),
        new MiniCssExtractPlugin({ filename: "[name]-[contenthash:8].css" }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}