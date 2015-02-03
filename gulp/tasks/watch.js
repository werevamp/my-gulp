var gulp = require('gulp');

gulp.task('watch', ['browser_sync'], function() {
	gulp.watch( './scss/**/*.scss', ['sass'] );
});
