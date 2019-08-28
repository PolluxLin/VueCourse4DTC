const webpack = require("webpack")

module.exports = {
	// 在 prodution 下, 不要為 .js 產生 .map 檔, 才不會把註解都輸出出去
	productionSourceMap: false,
	//
	lintOnSave: false,
	configureWebpack: {
		devtool: 'source-map',
		plugins: [
			new webpack.ProvidePlugin({
				$: "jquery",
				jQuery: "jquery",
				"windows.jQuery": "jquery",
				Popper: ["popper.js", "default"]
			})
		],
	}
}
