const webpack = require('webpack')
const pkg = require('./package.json')

const isProduction = process.env.RUN_ENV === 'production';
const baseUrl = 'https://github.com/TOMGOU/canvas-example/www';
console.log({ isProduction })
module.exports = {
  baseUrl: isProduction ?  baseUrl: '/',
  outputDir: 'www',
}
