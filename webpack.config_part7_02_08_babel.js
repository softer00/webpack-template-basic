// import
const path = require('path')

// npm i -D html-webpack-plugin
const HtmlPlugin = require('html-webpack-plugin')  // new HtmlPlugin
const CopyPlugin = require('copy-webpack-plugin')  // new CopyPlugin

// export
module.exports = {
    // parcel index.html
    // 파일을 읽어들이기 시작하는 진입점 설정
    // webpack은 parcel과 달리 js로 진입점 설정
    entry: './js/main.js',

    // 결과물(번들)을 반환하는 설정
    // NodeJS에 필요한 절대경로를 표기 필요!
    // __dirname : 현재 경로를 가리키는 전역변수
    output: {
        // path: path.resolve(__dirname, 'public'),  // 첫번째 인수와 두번째 인수를 합쳐 준다.
        // filename: 'main.js',
        clean: true
    },

    module: {
        rules: [
            {
                // test: /\.css$/,
                test: /\.s?css$/,
                use: [
                    'style-loader',  // 순서가 중요! style -> css -> postcss -> sass
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {  // .js파일을 babel-loader로 parse해서 사용.
                test: /\.js$/,
                use: [
                    'babel-loader'
                ]
            }
        ]
    },

    // 번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
    plugins: [
        new HtmlPlugin({
            template: './index.html'
        }),
        new CopyPlugin({
            patterns: [
                { from: 'static' }
            ]
        })
    ] // ,
    // devServer: {
    //     host: 'localhost'
    // }
}

