const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const { Template } = require('webpack')

module.exports = {
    mode: "prodaction",
    entry: {
        filename: path.resolve(__dirname, 'src/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name][contenthash].js',
        clean: true
    },
    devServer: {
        port: 3001,
        compress: true,
        static: {
            directory: path.join(__dirname, 'dist')
        }
    },
    plugins: [
        new htmlWebpackPlugin({
            title:'My Webpack',
            filename: 'index.html',
            template: 'src/index.html'
        })
    ]
}