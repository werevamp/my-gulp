var gulp = require('gulp');
var browser_sync = require('browser-sync');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');

var paths {
	scss: './scss/**/*.scss',
	css: './css'
}

gulp.task('sass', function() {
	return gulp.src(paths.scss)
		.pipe(sourcemaps.init())
		.pipe(sass())
		.pipe(sourcemaps.write())
		.pipe(autoprefixer({ browsers: ['last 2 version'] }))
		.pipe(gulp.dest(paths.css))
		.pipe(browser_sync.reload({ stream:true }));
});
