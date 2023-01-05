const path = require('path');

module.exports = {
    entry: './js/dashboard_main.js',
    mode: "production",
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, "public"),
    },
    
    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000
  },
    module: {
    rules: [{
    test: /\.css$/i,
    use: ["style-loader", "css-loader"],
    },
    {
      test: /\.(gif|png|jpe?g|svg)$/i,
      use: [
        'file-loader',
        {
          loader: 'image-webpack-loader',
          options: {
            bypassOnDebug: true, // webpack@1.x
            disable: true, // webpack@2.x and newer
          },
        },
      ],
    }]
    },
};
