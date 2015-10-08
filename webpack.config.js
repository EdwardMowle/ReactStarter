module.exports = {
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loaders: ['react-hot', 'babel-loader']
		}, {
			test: /\.html$/,
			loaders: ['file?name=[name].[ext]']
		}]
	},
	entry: {
		javascript: __dirname + '/app/index.js',
		html: __dirname + '/app/index.html'
	},
	output: {
		path: __dirname + '/build',
		filename: 'index.js'
	}
}
