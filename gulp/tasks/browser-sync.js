var gulp         = require('gulp');
var browser_sync = require('browser-sync');
var config       = require('../config').browserSync;

gulp.task('browser_sync', function() {
	browser_sync({
		open: false,
		//adjust proxy to domain
		proxy: config.proxy
	});
});
