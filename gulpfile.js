'use strict';


var gulp = require('gulp');
var subtree = require('gulp-subtree');
var clean = require('gulp-clean');

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
