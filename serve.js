var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var WebpackDevMiddleware = require("webpack-dev-middleware");

var webpackConf = require('./webpack.config');

webpackConf.entry.index.unshift("webpack-dev-server/client?http://localhost:8080/",'webpack/hot/only-dev-server');

var compiler = webpack(webpackConf);

var server = new WebpackDevServer(compiler, {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true
})
server.listen(8080,"localhost",function(){
    console.info("服务已启动......")
})