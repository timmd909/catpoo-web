'use strict';

module.exports = function (grunt) {
	grunt.registerTask('default', [
		'clean',
		'copy',
		'sass',
	]);
};
