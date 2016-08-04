var source = 'src',
		destination = './assets',
		testDomain = 'my-gulp.dev',
		bowerDir = './bower_components',
		externalCssPaths = [
			bowerDir + '/foundation-sites/scss'
		];

module.exports = {
	sass: {
		src: source + '/scss/**/*.scss',
		dest: destination + '/css/',
		includePaths: externalCssPaths || []
	},
	javascript: {
		file: 'main.js',
		src: source + '/js/main.js',
		dest: destination + '/js/'
	},
	browserSync: {
		proxy: testDomain,
		open: false
	}
};
