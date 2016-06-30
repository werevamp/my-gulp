var gulp = require('gulp');
var browserSync = require('browser-sync').create('My Gulp');
var config = require('../config').browserSync;

gulp.task('browser-sync', function() {
	browserSync.init({
		proxy: "my-gulp.dev",
		open: false
	});
});
