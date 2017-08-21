var path = require('path')
var webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const env = process.env.NODE_ENV
const production = false

const plugins = production ? [
	new webpack.optimize.UglifyJsPlugin({
		output: {
			comments: false,
		},
		compress: {
			warnings: false
		}
	}),
	new HtmlWebpackPlugin({
		template: path.join(__dirname, 'app/index.html'),
		inject: 'body',
		minify:{    //压缩HTML文件
			removeComments:true,    //移除HTML中的注释
			collapseWhitespace:true    //删除空白符与换行符
		},
	}),
  new ExtractTextPlugin({ filename: 'css/[name].[hash:8].css', disable: false, allChunks: false}),
	new CleanWebpackPlugin(['dist/'], {
		root: path.resolve(__dirname , '.')
	}),
	new CopyWebpackPlugin([
		{from: 'app/favicon.ico'},
	]),
  new webpack.optimize.CommonsChunkPlugin('vendor', 'js/vendor.[hash:8].min.js')
] : [
  new webpack.DllReferencePlugin({
    context: __dirname,
    manifest: require('./manifest.json')
  }),
	new HtmlWebpackPlugin({
		title: "慢时光",
    hash: true,
		baseUrl: process.env.NODE_ENV == 'development' ? '/' : '/',
		template: path.join(__dirname, 'app/index.html'),
		inject: 'body'
	}),
	new ExtractTextPlugin({ filename: 'css/[name].css', disable: false, allChunks: false})
]

module.exports = {
	entry: {
		'index': [
			path.resolve(__dirname,'app/app.js')
		],
		'vendor': ['react', 'react-dom', 'mobx', 'mobx-react']
	},
	output: {
		path: production ? 'dist/' : path.join(__dirname,'build/js'),
		filename: production ? 'js/[name].[hash:8].min.js' : 'js/[name].js',
		publicPath: production ? '/h5/' : '',
		chunkFilename: production ? 'js/[chunkhash:8].[name].chunk.min.js' : 'js/[name].min.js'
	},
	module: {
		// preLoaders: [
		// 	{ test: /\.js$/, exclude: /node_modules/, loader: 'eslint'}
		// ],
		loaders: [
			{ test: /\.js$/, exclude: /node_modules/, loader: 'react-hot!babel', exclude: /node_modules/},
			// { test: /\.css$/, loader: 'style!css!autoprefixer' },
			// { test: /\.scss$/, loader: 'style!css!postcss!sass' },
      { test: /\.scss$/, loader: 'style!css!sass' },
			{ test: /\.css$/, loader: ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css?sourceMap!autoprefixer'}) },
			{
				test: /\.(png|jpg|woff|woff2)$/,
				loaders: [
					'url?limit=8192&name=/images/[name].[hash:8].[ext]',
					'image?{bypassOnDebug:true, progressive:true,optimizationLevel:3,pngquant:{quality:"65-80",speed:4}}'
				]
			},
			{ test: /\.html$/,loader: 'raw'}
		]
	},
	// postcss:[autoprefixer({browsers:['last 2 versions']})],
	plugins:[
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'js/vendor.js' }),
		new webpack.HotModuleReplacementPlugin(),
		...plugins,
	],
  resolve:{
    extensions: ['', '.js', '.scss'],
    alias: {
      'component': __dirname + 'app/component/',
      'containers': __dirname + 'app/containers/',
      'css': __dirname + 'app/scss',
      'images': __dirname + 'app/images',
    }
  },
  externals: {
    'jquery': 'window.$'
  },
	devtool: 'inline-source-map'
}
