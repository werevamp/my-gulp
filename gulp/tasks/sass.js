var gulp          = require('gulp');
var browser_sync  = require('browser-sync');
var sass          = require('gulp-sass');
var sourcemaps    = require('gulp-sourcemaps');
var autoprefixer  = require('gulp-autoprefixer');
var handle_errors = require('../util/handle-errors');
var through       = require('through2');
var notify        = require('gulp-notify');
var plumber       = require('gulp-plumber');

var paths = {
	scss: './src/scss/**/*.scss',
	css: './dest/css'
};

gulp.task('sass', function() {
	return gulp.src(paths.scss)
		.pipe(sourcemaps.init())
		.pipe(sass())
		.on('error', handle_errors)
		.pipe(sourcemaps.write())
		.pipe(autoprefixer({ browsers: ['last 2 version'] }))
		.pipe(gulp.dest(paths.css))
		.pipe(browser_sync.reload({ stream:true }));
});
