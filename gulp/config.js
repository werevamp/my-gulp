var source = './src';
var destination = './build';

module.exports = {
	browserSync {
		proxy: 'my-gulp.dev'
	},
	sass: {
		src: source + '/scss/**/*.scss',
		dest: destination + ''
	},
	browserify: [{
		entries: source + '/scripts/page.js',
		dest: destination,
		outputName: 'page.js',
		// list of externally available modules to exclude from the bundle
		external: ['jquery', 'underscore']
	}]
};
