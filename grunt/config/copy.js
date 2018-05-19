'use strict';

module.exports = {
	'jquery': {
		files: [
			{
				'public/js/jquery.js': 'node_modules/jquery/dist/jquery.min.js',
				'public/js/jquery.debug.js': 'node_modules/jquery/dist/jquery.js',
			}
		],
	},
	'requirejs': {
		files: [
			{
				'public/js/require.js': 'node_modules/requirejs/require.js',
			}
		]
	},
	'scripts': {
		files:[{
			expand: true,
			cwd: 'assets/js',
			src: '**/*.js',
			dest: 'public/js',
		}],
	},
};
