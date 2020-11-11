const path = require('path');
//引入 自动生成 html包
const HtmlWebpackPlugin = require('html-webpack-plugin');
// npm 更新 清理dist 写法
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader-v16/dist/plugin').default;


module.exports = {
    // 编译打包模式  development(不压缩 可以看到注释和代码)  production(压缩 看不到注释和代码)  none
    mode: "development",
    //入口 entry
    entry: './src/main.js',
    output: {
        //出口 output
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        },
        {
            test: /\.vue$/,
            loader: 'vue-loader-v16'
        }]
    },
    plugins: [
        //清理dist 
        new CleanWebpackPlugin(),
        //自动生成 html
        new HtmlWebpackPlugin({
            // 把index.html作为模板 创建到dist目录
            template: './public/index.html'
        }),
        new VueLoaderPlugin()
    ],
};