// module 옵션을 내보내기 설정한다.
// webpack.config.js에 내용 추가 필요!
module.exports = {
    presets: ['@babel/preset-env'],
    plugins: [
        ['@babel/plugin-transform-runtime']
    ]
}
