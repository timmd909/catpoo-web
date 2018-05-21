'use strict';

module.exports = {
	'boostrap': {
		files: [{
			'public/js/bootstrap.js': 'node_modules/bootstrap/dist/js/bootstrap.min.js',
			'public/js/bootstrap.debug.js': 'node_modules/bootstrap/dist/js/bootstrap.js',
		}],
	},
	'font-awesome': {
		files: [{
			expand: true,
			cwd: 'node_modules/font-awesome/fonts/',
			src: '*',
			dest: 'public/fonts/'
		}],
	},
	'jquery': {
		files: [{
			'public/js/jquery.js': 'node_modules/jquery/dist/jquery.min.js',
			'public/js/jquery.debug.js': 'node_modules/jquery/dist/jquery.js',
		}],
	},
	'popper': {
		files: [{
			'public/js/popper.js': 'node_modules/popper.js/dist/umd/popper.min.js',
			'public/js/popper.debug.js': 'node_modules/popper.js/dist/umd/popper.js',
		}],
	},
	'requirejs': {
		files: [{
			'public/js/require.js': 'node_modules/requirejs/require.js',
		}],
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
