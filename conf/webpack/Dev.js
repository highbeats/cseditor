'use strict';

/**
 * Default dev server configuration.
 */
const { resolve } = require('path');
const webpack = require('webpack');
const WebpackBaseConfig = require('./Base');

class WebpackDevConfig extends WebpackBaseConfig {

  constructor() {
    super();
    this.config = {
      entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://0.0.0.0:8000/',
        'webpack/hot/only-dev-server',
        './index.js'
      ],
      plugins: [
      ]
    }
  }
}

module.exports = WebpackDevConfig;
