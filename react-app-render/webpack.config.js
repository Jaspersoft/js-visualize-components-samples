const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'react-app-render-build.js',
        path: path.resolve('../assets/js', 'build'),
        publicPath: '/build/',
    },
    externals:{},
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [[
                            '@babel/preset-env',
                            {
                                targets: {
                                    node: "current"
                                },
                                modules: false
                            }
                        ]]
                    }
                }
            },
            {
                test: /\.css$/i,
                use: ["css-loader"],
            },
        ]
    },
    // ...add resolve to .jsx extension
    resolve: {
        extensions: ['*', '.js', '.jsx'],
    },
    devServer: {
        static: path.resolve('../assets/js', 'build'),
    },
    // ...
}