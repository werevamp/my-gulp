'use strict';

var gulp = require('gulp'),
		source = require('vinyl-source-stream'),
		buffer = require('vinyl-buffer'),
		babelify = require('babelify'),
		browserify = require('browserify'),
		watchify = require('watchify'),
		sourcemaps = require('gulp-sourcemaps'),
		browserSync = require('browser-sync').get('My Gulp'),
		config = require('../config').javascript;

gulp.task('javascript', function() {
	var bundler = watchify(browserify('src/js/main.js').transform(babelify, {
		presets: ["es2015"]
	}));

	function rebundle() {
		bundler.bundle()
			.on('error', function (err) { console.error(err); this.emit('end'); })
			.pipe(source('main.js'))
			.pipe(buffer())
			.pipe(sourcemaps.init())
			.pipe(sourcemaps.write())
			.pipe(gulp.dest(config.dest))
			.pipe(browserSync.stream());
	}

	bundler.on('update', function() {
		console.log('-> bundling...');
		rebundle();
	});

	rebundle();
});
