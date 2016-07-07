'use strict';

var gulp = require('gulp');
var config = require('../config');

gulp.task('watch', ['browser-sync', 'sass', 'javascript'], function() {
	gulp.watch(config.sass.src, ['sass']);
});
