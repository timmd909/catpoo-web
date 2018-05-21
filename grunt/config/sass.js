'use strict';

module.exports = {
	options: {
		includePaths: [
			'node_modules/bootstrap/scss',
			'node_modules/font-awesome/scss',
		],
	},
	dist: {
		files: {
			'public/css/catpoo.css': 'assets/scss/catpoo.scss',
		}
	}
};
