const { override, addBabelPlugin } = require('customize-cra');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = override(
  // Add Babel plugin for better code splitting
  addBabelPlugin('@babel/plugin-transform-runtime'),
  
  // Add bundle analyzer in development
  (config) => {
    if (process.env.NODE_ENV === 'production') {
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'static',
          reportFilename: 'bundle-report.html',
          openAnalyzer: false,
        })
      );
    }
    return config;
  }
);
