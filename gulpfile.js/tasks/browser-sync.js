const gulp = require('gulp');
const browserSync = require('browser-sync').create('My Gulp');
const config = require('../config').browserSync;

gulp.task('browser-sync', function() {
	browserSync.init(config);
});
