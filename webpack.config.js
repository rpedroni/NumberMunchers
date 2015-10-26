module.exports = {
	entry: './index.js',
	output: {
		filename: 'bundle.js'
	},
	module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader' },
			 // Expose to chrome react tools
			{ test: require.resolve("react"), loader: "expose?React" }
    ]
  }
};
