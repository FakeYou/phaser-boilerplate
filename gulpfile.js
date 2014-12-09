'use strict';

var gulp = require('gulp');
var browserify = require('gulp-browserify');
var clean = require('gulp-clean');
var connect = require('gulp-connect');
var gutil = require('gulp-util');
var rename = require('gulp-rename');

gulp.task('clean', function() {
  return gulp.src('./dist/**/*.*', { read: false })
    .pipe(clean({ force: true }));
});

gulp.task('copyAssets', ['clean'], function() {
  return gulp.src('./lib/assets/**/*.*', { base: './lib' })
    .pipe(gulp.dest('dist'));
});

gulp.task('copyPhaser', ['clean'], function() {
  return gulp.src('./node_modules/phaser/dist/phaser.min.js', { base: './node_modules/phaser/dist'})
    .pipe(rename('phaser.min.js'))
    .pipe(gulp.dest('dist'));
});

gulp.task('copyLibs', ['clean'], function() {
  return gulp.src('./lib/libs/**/*.*', { base: './lib' })
    .pipe(gulp.dest('dist'));
});

gulp.task('copyHtml', ['clean'], function() {
  return gulp.src('./index.html', { base: './' })
    .pipe(gulp.dest('dist'));
});

gulp.task('bundle', ['clean'], function() {
  return gulp.src('./index.js', { read: false })
    .pipe(browserify().on('error', gutil.log))
    .pipe(gulp.dest('./dist'));
});

gulp.task('watch', function() {
  gulp.watch('./lib/**/*.*', ['rebuild']);
});

gulp.task('webserver', function() {
  connect.server({
    root: ['./dist']
  });
});

gulp.task('build', ['clean', 'bundle', 'copyHtml', 'copyAssets']);
gulp.task('rebuild', ['clean', 'bundle', 'copyAssets']);

gulp.task('default', ['watch', 'webserver']);