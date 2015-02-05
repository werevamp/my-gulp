var gulp = require('gulp');
var browserify_task = require('./browserify');

gulp.task('watchify', function(callback) {
	browserify_task(callback, true);
})
