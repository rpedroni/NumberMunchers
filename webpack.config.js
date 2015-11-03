module.exports = {
	entry: [
		'webpack/hot/only-dev-server',
		'./index.js'
	],
	output: {
		path: __dirname + '/build',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{ test: /\.js?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
			{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'}
		]
	}
};
