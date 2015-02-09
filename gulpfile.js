'use strict';


var gulp = require('gulp');
var subtree = require('gulp-subtree');
var clean = require('gulp-clean');
var deploy = requrie('gulp-gh-pages');

gulp.paths = {
  src: 'src',
  dist: 'dist',
  tmp: '.tmp',
  e2e: 'e2e'
};

require('require-dir')('./gulp');

gulp.task('default', ['clean'], function () {
    gulp.start('build');
});

gulp.task('subtree', function () {
  return gulp.src('dist')
    .pipe(subtree())
    .pipe(clean());
});

gulp.task('deploy', function() {
  return gulp.src('./build-1006pm/**/*')
  .pipe.deploy(options));
});
