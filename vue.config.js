const path = require('path');
module.exports = {
	chainWebpack: (config) => {
		/* 添加分析工具 */
		if (process.env.NODE_ENV === 'production') {
		  config
			.plugin('webpack-bundle-analyzer')
			.use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
			.end()
		  config.plugins.delete('prefetch')
		} else {
		}
	},
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