const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',

	// mode: 'production',
  mode: 'development',

	module: {

		rules: [
			//
			// HTML
			//
			{
				test: /\.html$/i,
				use: [
				  { loader: 'html-loader' },
				],
			},

			//
			// SASS
			//
			{
				test: /\.s[ac]ss$/i,
				exclude: /^stream.mjpeg$/,
				use: [
					{
						loader:'style-loader',
						options: {
							// nothing yet
						},
					},
					{
					  loader: 'css-loader',
						options: {
							sourceMap: true,
						},
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true,
							sassOptions: {
								includePaths: ['node_modules/timstrap/scss'],
							} // sassOptions
						},
					},
				], // use [...]
			},
		], // rules
	}, // module {...}

	plugins: [
		new HtmlWebpackPlugin({
      title: 'CATPOO &mdash; Antagonize Your Pets!',
			template: path.resolve(__dirname, 'src/index.html'),
			filename: path.resolve(__dirname, 'dist/index.html'),
    }),
	], // plugins [...]

  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
		clean: true,
	}, // output {...}

	watch: true,
};
