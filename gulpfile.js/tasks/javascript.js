'use strict';

const gulp = require('gulp'),
		source = require('vinyl-source-stream'),
		buffer = require('vinyl-buffer'),
		babelify = require('babelify'),
		browserify = require('browserify'),
		watchify = require('watchify'),
		sourcemaps = require('gulp-sourcemaps'),
		uglify = require('gulp-uglify'),
		browserSync = require('browser-sync').get('My Gulp'),
		config = require('../config').javascript;

gulp.task('javascript', () => {
	let bundler = watchify(
		browserify(config.src, { debug: true })
			.transform(babelify, {
				presets: ["es2015"],
				sourceMaps: true
			}
		)
	);

	function rebundle() {
		bundler.bundle()
			.on('error', err => { console.error(err); this.emit('end'); })
			.pipe(source(config.file))
			.pipe(buffer())
			.pipe(sourcemaps.init({ loadMaps: true }))
			//.pipe(uglify())
			.pipe(sourcemaps.write('./'))
			.pipe(gulp.dest(config.dest))
			.pipe(browserSync.stream());
	}

	bundler.on('update', () => {
		//console.log('-> bundling...');
		rebundle();
	});

	rebundle();
});
