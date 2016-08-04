'use strict';

const gulp = require('gulp'),
			config = require('../config'),
			watchList = ['browser-sync', 'sass', 'javascript'];

gulp.task('watch', watchList, () => {
	gulp.watch(config.sass.src, ['sass']);
});
