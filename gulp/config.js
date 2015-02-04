var dest = './build';
var src = './src';

module.exports = {
	browserify: [{
		entries: src + '/javascript/global.coffee',
		dest: dest,
		outputName: 'global.js',
		// Additional file extentions to make optional
		extensions: ['.coffee', '.hbs'],
		// list of modules to make require-able externally
		require: ['jquery', 'backbone/node_modules/underscore']
		// See https://github.com/greypants/gulp-starter/issues/87 for note about
		// why this is 'backbone/node_modules/underscore' and not 'underscore'
	}, {
		entries: src + '/javascript/page.js',
		dest: dest,
		outputName: 'page.js',
		// list of externally available modules to exclude from the bundle
		external: ['jquery', 'underscore']
	}]
};
