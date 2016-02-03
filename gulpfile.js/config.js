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
	browserSync: {
		proxy: 'my-gulp.dev'
	}
};
