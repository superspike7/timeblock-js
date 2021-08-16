 const path = require('path');
 const MiniCssExtractPlugin = require('mini-css-extract-plugin');

 module.exports = {
   entry: './src/index.js',
   mode: 'development',
   output: {
    filename: 'bundle.js',
     path: path.resolve(__dirname, 'dist'),
   },
   devtool: 'inline-source-map',
   plugins: [new MiniCssExtractPlugin({
      filename:"style.css"
   })],
   module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                MiniCssExtractPlugin.loader,
                "css-loader",
                "postcss-loader"
            ]
            }
        ]
    },
 };
