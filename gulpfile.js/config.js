var source = './src',
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
		src: source + '/js/**/*.js',
		dest: destination + '/js/'
	},
	browserSync: {
		proxy: testDomain
	}
};
