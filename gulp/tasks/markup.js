'use strict';

var gulp = require('gulp');
var config = require('../config').markup;
var browserSync = require('browser-sync');
var include = require('gulp-file-include');
var rename = require('gulp-rename');
var minifyHTML = require('gulp-minify-html');
var handleErrors = require('../util/handleErrors');

gulp.task('markup', function() {
  return gulp.src(config.src)
    .pipe(include({
      basepath: config.partialsSrc
    }))
    .on('error', handleErrors)
    .pipe(rename({extname: ""}))
    .pipe(rename({extname: ".html"}))
    .pipe(minifyHTML({spare: true}))
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({stream:true}));
});
