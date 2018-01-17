const path = require('path')

module.exports = {
	entry: "./src/index.js",
	output: {
		filename: "bundle.js",
		path: path.join(__dirname, "dist")
	}, 
	module: {
		rule: [
			{
				test: /\.js$/,
				use: "babel-loader"
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: "style-loader"
					}, 
					{
						loader: "css-loader"
					}
				]
			},
			{
				test: /\.jpg$/,
				use: "file-loader"
				]
			}
		]
	}
}