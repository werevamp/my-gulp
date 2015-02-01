var gulp = require('gulp');
var browser_sync = require('browser-sync');

gulp.task('browser_sync', function() {
	browser_sync(
		open: false,
		//adjust proxy to domain
		proxy: 'my-gulp.dev'
	);
});
