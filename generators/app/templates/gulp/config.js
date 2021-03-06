/**
 * Gulp Configuration
 */

/* jshint node: true */

'use strict';

var path  = require('path');
var gutil = require('gulp-util');

var root       = path.join(__dirname, '..');
var src        = path.join(root, 'source');
var build      = path.join(root, 'build');
var dist       = path.join(root, 'dist');
var composer   = path.join(root, 'composer.phar');
var production = !gutil.env.dev;

module.exports = {
  root: root,
  src: src,
  build: build,
  dist: dist,
  composer: composer,
  production: production,
  vagrantKey: path.join(root, '.vagrant', 'machines', 'default', 'virtualbox', 'private_key'),
  resources: {
    scss: path.join(src, 'css', '**', '*.scss'),
    scripts: path.join(src, 'js', '**', '*.js'),
    images: path.join(src, 'img', '**', '*.{png,jpg,jpeg,gif,svg}'),
    vendorImages: [],
    svg: path.join(src, 'img', '**', '*.svg'),
    php: path.join(src, '**', '*.php'),
    fonts: path.join(src, '**', '*.{eot,ttf,woff}'),
    vendorFonts: [
      path.join('node_modules', 'font-awesome', 'fonts', '*')
    ],
    json: [
      'theme.json',
      'package.json',
      'composer.json'
    ],
    misc: [
      'source/*',
      '!source/*.php',
      '!source/**/*.scss',
      '!source/js/lib/*.js',
      './theme.json'
    ]
  },
  gzip: {
    gzipOptions: {
      level: 9
    }
  },
  browserify: {
    debug: !production
  },
  sass: {
    errLogToConsole: true,
    outputStyle: 'expanded',
    sourceComments: !production,
    precision: 10,
    includePaths: [
      path.join(__dirname, '..', 'source', 'css'),
      path.join(__dirname, '..', 'node_modules')
    ]
  },
  pleeease: {
    browsers: [ 'last 3 versions' ],
    minifier: production ? { preserveHacks: true, removeAllComments: true } : false,
    sourcemaps: false
  }
};
