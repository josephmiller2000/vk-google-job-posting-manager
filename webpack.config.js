module.exports = {
    mode: 'production',
    devtool: 'source-map',
    entry: "./blocks/vk-job-posting/index.js",
    output: {
        filename: "./blocks/vk-job-posting/build.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: [
                            '@babel/plugin-transform-react-jsx',
                            [
                                // JSをスキャンして、potを作成/アップデート
                                '@wordpress/babel-plugin-makepot',
                                {
                                    'output': `./languages/vk-job-posting.pot`
                                }
                            ]
                        ]
                    }
                }
            }
        ]
    }
}
