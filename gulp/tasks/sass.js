var gulp          = require('gulp');
var browser_sync  = require('browser-sync');
var sass          = require('gulp-sass');
var sourcemaps    = require('gulp-sourcemaps');
var autoprefixer  = require('gulp-autoprefixer');
var handle_errors = require('../util/handle-errors');
var through       = require('through2');
var notify        = require('gulp-notify');
var config        = require('../config').sass;

gulp.task('sass', function() {
	return gulp.src(config.src)
		.pipe(sourcemaps.init())
		.pipe(sass())
		.on('error', handle_errors)
		.pipe(sourcemaps.write())
		.pipe(autoprefixer({ browsers: ['last 2 version'] }))
		.pipe(gulp.dest(config.dest))
		.pipe(browser_sync.reload({ stream:true }));
});
