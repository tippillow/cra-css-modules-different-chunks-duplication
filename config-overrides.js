module.exports = {
  webpack: function(config) {
    config.optimization.splitChunks = {
      chunks: 'all',
      name: false,
      cacheGroups: {
        commons: {
          enforce:true,
          test: /[\\/]shared[\\/]/,
          name: "shared",
          //Tells webpack to ignore splitChunks.minSize, splitChunks.minChunks, splitChunks.maxAsyncRequests and splitChunks.maxInitialRequests options and always create chunks for this cache group.
          chunks: 'all',
        },
      },
    };
    return config;
  },
};
