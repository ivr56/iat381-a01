'use strict';

var gulp = require('gulp');

var paths = gulp.paths;

var $ = require('gulp-load-plugins')();

var wiredep = require('wiredep').stream;

gulp.task('inject', function () {

  var injectStyles = gulp.src([
    paths.src + '/{styles, app}/**/*.css'
  ], { read: false });

  var injectScripts = gulp.src([
    paths.src + '/{app,components, controllers}/**/*.js',
    '!' + paths.src + '/{app,components, controllers}/**/*.spec.js',
    '!' + paths.src + '/{app,components, controllers}/**/*.mock.js'
  ]).pipe($.angularFilesort());

  var injectOptions = {
    ignorePath: [paths.src, paths.tmp + '/serve'],
    addRootSlash: false
  };

  var wiredepOptions = {
    directory: 'bower_components',
    exclude: [/bootstrap\.js/]
  };

  return gulp.src(paths.src + '/*.html')
    .pipe($.inject(injectStyles, injectOptions))
    .pipe($.inject(injectScripts, injectOptions))
    .pipe(wiredep(wiredepOptions))
    .pipe(gulp.dest(paths.tmp + '/serve'));

});
