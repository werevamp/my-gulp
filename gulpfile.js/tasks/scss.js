'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').get('My Gulp');
var notify = require('../library/notify');
//var notify = require('gulp-notify');
var plumber = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');
var config = require('../config').sass;

gulp.task('sass', function() {
	return gulp.src(config.src)
		.pipe(sourcemaps.init())
		.pipe(plumber({errorHandler: notify}))
		.pipe(sass({ includePaths: config.includePaths }))
		.pipe(autoprefixer({ browsers: ['last 2 version'] }))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(config.dest))
		.pipe(browserSync.stream({match: '**/*.css'}));
});

gulp.task('sass:prod', function() {
	return gulp.src(config.src)
		.pipe(sass({ includePaths: config.includePaths, outputStyle: 'compressed' }))
		.on('error', sass.logError)
		.pipe(autoprefixer({ browsers: ['last 2 version'] }))
		.pipe(gulp.dest(config.dest));
});
