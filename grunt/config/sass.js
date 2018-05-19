'use strict';

module.exports = {
	options: {
		includePaths: [
			'node_modules/bootstrap/scss',
		],
	},
	dist: {
		files: {
			'public/css/catpoo.css': 'assets/scss/catpoo.scss',
		}
	}
};
