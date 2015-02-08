var gulp = require('gulp');
var watchify = require('./browserify');

gulp.task('watch', ['watchify', 'browser_sync'], function(callback) {
	gulp.watch( './src/scss/**/*.scss', ['sass'] );
});
