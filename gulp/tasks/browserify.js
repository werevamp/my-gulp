var gulp          = require('gulp');
var browserify    = require('browserify');
var watchify      = require('watchify');
var source        = require('vinyl-source-stream');
var browser_sync  = require('browser-sync');
var bundle_logger = require('../util/bundle-logger');
var config = require('../config').browserify;
var handle_errors  = require('../util/handle-errors');
var _             = require('lodash');

var browserTask = function(callback, dev_mode) {

	var bundle_queue = config.bundle.length;

	var browserify_this = function(bundle_config) {

		if(dev_mode) {
			_.extend(bundle_config, watchify.args, { debug: true });
			bundle_config = _.omit(bundle_config, ['external', 'require']);
		}

		var b = browserify(bundle_config);

		var bundle = function() {
			bundle_logger.start('page.js');

			return b
				.bundle()
				.on('error', handle_errors)
				.pipe(source('page.js'))
				.pipe(gulp.dest(dest))
				.on('end', function() {
					bundle_logger.end('page.js');

					if(bundle_queue) {
						bundle_queue--;

						if(bundle_queue === 0) {
							callback();
						}
					}
				})
				.pipe(browser_sync.reload({ stream: true }));
		};

		if(dev_mode) {
			b = watchify(b);

			b.on('update', bundle);
			bundle_logger.watch('page.js');
		} else {

			if(bundle_config.require) {
				b.require(bundle_config.require)
			}

			if(bundle_config.external) {
				b.external(bundle_config.external);
			}
		}

		return bundle();
	};

	config.bundle_config.forEach(browserify_this);
};

gulp.task('browserify', browserTask);

module.exports = browserTask;
