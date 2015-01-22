'use strict';

var gulp = require('gulp');
var browserify = require('browserify');
var gutil = require('gulp-util');
var plumber   = require('gulp-plumber');
var webserver = require('gulp-webserver');
var opn       = require('opn');

gulp.paths = {
  src: 'src',
  dist: 'dist',
  tmp: '.tmp',
  e2e: 'e2e'
};



gulp.task('webserver', function() {
  gulp.src( 'dist/.' )
    .pipe(webserver({
      livereload:       true,
      directoryListing: false
    }));
});


