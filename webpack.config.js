const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  // mode: 'production',
  mode: 'development',
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: [
					'style-loader',
					'css-loader',
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
	},
	plugins: [
		new HtmlWebpackPlugin({
      title: 'CATPOO &mdash; Antagonize Your Pets!',
    }),
	],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
		clean: true,
  },
};
