const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: './src/vuetabler.js',
	output: {
		path: path.resolve(__dirname, './dist'),
		publicPath: '/dist/',
		filename: 'vuetabler.js'
	},
	module: {
		loaders: [
			{
                test: /\.vue$/,
                loader: 'vue-loader'
            }
		]
	},
	// vue: {
	// 	// vue-loader options go here
	// 	esModule: true
	// },
	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.js'
		},
		extensions: ['.js', '.vue']
	}
}

if(process.env.NODE_ENV === 'production'){
	module.exports.devtool = '#source-map';
	// http://vue-loader.vuejs.org/en/workflow/production.html
	// module.exports.plugins = (module.exports.plugins || []).concat([
	// 	new webpack.DefinePlugin({
	// 		'process.env': {
	// 			NODE_ENV: '"production"'
	// 		}
	// 	}),
	// 	new webpack.optimize.UglifyJsPlugin({
	// 		sourceMap: true,
	// 		compress: {
	// 			warnings: false
	// 		}
	// 	})
	// ]);
}
