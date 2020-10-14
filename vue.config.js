const path = require('path');
module.exports = {
	// publicPath: './',
	configureWebpack: config => {
		config.resolve = {
			extensions: ['.js', '.vue', '.json'],
			alias: {
				'vue$': 'vue/dist/vue.esm.js',
				'@': path.join(__dirname, './src'),
				'@modules': path.join(__dirname, './src-modules'),
				'assets': path.join(__dirname, './src/assets')
			}
		};

	}
}