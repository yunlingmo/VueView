const path = require('path');
const CompressionWebpackPlugin = require('compression-webpack-plugin')

const compress = new CompressionWebpackPlugin(
	{
	  filename: info => {
		return `${info.name}.gz${info.query}`
	  },
	  algorithm: 'gzip', 
	  threshold: 10240,
	  test: new RegExp(
		'\\.(' +
		['js'].join('|') +
		')$'
	  ),
	  minRatio: 0.8,
	  deleteOriginalAssets: false
	}
)

module.exports = {
	devServer: {
		// 设置代理
		proxy: {
            '/api': {
                target: 'http://127.0.0.1:3000', // 域名
                ws: false, // 是否启用 websockets
                changeOrigin: true, //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
                pathRewrite: {
                    "^/api": "/"
                }
            }
        }
		// before(app, server) { 
		//   app.get(/.*.(js)$/, (req, res, next) => { 
		// 	req.url = req.url + '.gz';
		// 	res.set('Content-Encoding', 'gzip');
		// 	next();
		//   })
		// }
	},
	chainWebpack: (config) => {
		config.optimization.minimize(true);  // 代码压缩,去掉js\css多余空格、换行
		// 分割代码,相应的文件中存入分割后的代码
		config.optimization.splitChunks({
			chunks: 'all'
		  })
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
		// config.plugins.push(compress)

	}
}