const path = require('path');

const mode = process.env.NODE_ENV || 'development';
const prod = mode === 'production';

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode,
  resolve: {
		alias: {
			svelte: path.resolve('node_modules', 'svelte'),
			'@Containers': path.resolve(__dirname, 'src/Containers/'),
			'@Services': path.resolve(__dirname, 'src/Services/'),
			'@Assets': path.resolve(__dirname, 'src/Assets/'),
		},
		extensions: ['.mjs', '.js', '.svelte'],
		mainFields: ['svelte', 'browser', 'module', 'main']
  },
  output: {
		path: __dirname + '/public',
		filename: '[name].js',
		chunkFilename: '[name].[id].js'
	},
  module: {
    rules: [
      {
        test: /\.(html|svelte)$/,
        exclude: /node_modules(?!\/svelte-routing)/,
        use: "svelte-loader"
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
				test: /\.(png|jpe?g|gif|mp4|svg|ttf)$/,
				use: [
					{
						loader: 'file-loader'
					},
				],
			}
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Svelte Boilerplate",
      template: "index.ejs"
    })
  ],
  devtool: prod ? false : 'source-map',
  devServer: {
    port: 3000
  }
};
