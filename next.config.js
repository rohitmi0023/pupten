module.exports = {
	reactStrictMode: true,
	module: {
		loaders: [
			{
				test: /\.json$/,
				loader: 'json-loader',
			},
		],
	},
};
