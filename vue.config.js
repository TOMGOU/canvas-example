const webpack = require('webpack')
const pkg = require('./package.json')

const isProduction = process.env.RUN_ENV === 'production';
const baseUrl = 'https://tomgou.github.io/canvas-example/www';
module.exports = {
  baseUrl: isProduction ?  baseUrl: '/',
  outputDir: 'www',
}
