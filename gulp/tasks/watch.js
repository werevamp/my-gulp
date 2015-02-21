var gulp     = require('gulp');
var watchify = require('./browserify');
var config   = require('../config');

gulp.task('watch', ['watchify', 'browser_sync'], function(callback) {
	gulp.watch( config.sass.src, ['sass'] );
});
