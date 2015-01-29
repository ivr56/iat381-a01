'use strict';

var gulp = require('gulp');

var paths = gulp.paths;

var $ = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'main-bower-files', 'uglify-save-license', 'del']
});

gulp.task('partials', function () {
  return gulp.src([
    paths.src + '/{app,components, navbar, controllers, main}/**/*.html',
    paths.tmp + '/{app,components, navbar, controllers, main}/**/*.html'
  ])
    .pipe($.minifyHtml({
      empty: true,
      spare: true,
      quotes: true
    }))
    .pipe($.angularTemplatecache('templateCacheHtml.js', {
      module: 'iat381A01'
    }))
    .pipe(gulp.dest(paths.tmp + '/partials/'));
});

gulp.task('html', ['inject', 'partials'], function () {
  var partialsInjectFile = gulp.src(paths.tmp + '/partials/templateCacheHtml.js', { read: false });
  var partialsInjectOptions = {
    starttag: '<!-- inject:partials -->',
    ignorePath: paths.tmp + '/partials',
    addRootSlash: false
  };

  var htmlFilter = $.filter('**/*.html');
  var jsFilter = $.filter('**/*.js');
  var cssFilter = $.filter('**/*.css');
  var assets;

  return gulp.src(paths.tmp + '/serve/*.html')
    .pipe($.inject(partialsInjectFile, partialsInjectOptions))
    .pipe(assets = $.useref.assets())
    .pipe($.rev())
    .pipe(jsFilter)
    .pipe($.ngAnnotate())
    .pipe($.uglify({preserveComments: $.uglifySaveLicense}))
    .pipe(jsFilter.restore())
    .pipe(cssFilter)
    .pipe($.csso())
    .pipe(cssFilter.restore())
    .pipe(assets.restore())
    .pipe($.useref())
    .pipe($.revReplace())
    .pipe(htmlFilter)
    
    .pipe($.minifyHtml({
      empty: true,
      spare: true,
      quotes: true
    }))
    .pipe(htmlFilter.restore())
    .pipe(gulp.dest(paths.dist + '/'))
    .pipe($.size({ title: paths.dist + '/', showFiles: true }));
});
gulp.task('images_png', function () {
  return gulp.src(paths.src + '/img/*.png')
    .pipe(gulp.dest(paths.dist + '/img/'));
});
gulp.task('images_jpg', function () {
  return gulp.src(paths.src + '/img/*.jpg')
    .pipe(gulp.dest(paths.dist + '/img/'));
});


gulp.task('fonts', function () {
  return gulp.src($.mainBowerFiles())
    .pipe($.filter('**/*.{eot,svg,ttf,woff}'))
    .pipe($.flatten())
    .pipe(gulp.dest(paths.dist + '/fonts/'));
});

gulp.task('icos', function () {
  return gulp.src(paths.src + '/**/*.ico')
    .pipe(gulp.dest(paths.dist + '/'));
});

gulp.task('controllers', function () {
  return gulp.src(paths.src + '/app/controllers/*.js')
    .pipe(gulp.dest(paths.dist + '/'));
});
gulp.task('javascripts', function () {
  return gulp.src(paths.src + '/app/logic/*.js')
    .pipe(gulp.dest(paths.dist + '/'));
});

gulp.task('htmlviews', function () {
  return gulp.src(paths.src + '/views/*.html')
    .pipe(gulp.dest(paths.dist + '/views/'));
});
gulp.task('cssviews', function () {
  return gulp.src(paths.src + '/styles/*.css')
    .pipe(gulp.dest(paths.dist + '/styles/'));
});


gulp.task('clean', function (done) {
  $.del([paths.dist + '/', paths.tmp + '/'], done);
});

gulp.task('build', ['html', 'images_png', 'images_jpg', 'fonts', 'javascripts', 'htmlviews', 'cssviews', 'controllers', 'icos']);
