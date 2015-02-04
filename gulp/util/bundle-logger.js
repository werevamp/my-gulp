var gutil         = require('gulp-util');
var pretty_hrtime = require('pretty-hrtime');
var start_time;

module.exports = {
	start: function(filepath) {
		start_time = process.hrtime();
		gutil.log('Bundling', gutil.colors.green(filepath) + '...');
	},

	watch: function(bundle_name) {
		gutil.log('Watching files required by', gutil.colors.yellow(bundle_name));
	},

	end: function(filepath) {
		var task_time = process.hrtime(start_time);
		var pretty_time = pretty_hrtime(task_time);
		gutil.log('Bundled', gutil.colors.green(filepath), 'in', gutil.colors.magenta(pretty_time));
	}
};
