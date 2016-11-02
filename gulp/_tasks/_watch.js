// 'use strict';
// /* Notes:
//    - gulp/tasks/browserify.js handles js recompiling with watchify
//    - gulp/tasks/browserSync.js watches and reloads compiled files
//    - watchers are made using `gulp-watch` so new files are automatically watched
// */
//
// var gulp     = require('gulp');
// var config   = require('../config');
// var browserSync   = require('browser-sync');
// var runSequence = require('run-sequence');
// var watch = require('gulp-watch');
//
//
// gulp.task('watch', ['clean'], function() {
//   runSequence('default', ['watchify','browserSync']);
//
//   watch(config.svgSprite.src + '/' + config.svgSprite.glob, function(){
//     runSequence('sprite');
//   });
//
//   watch(config.jslint.srcJs, function(){
//     runSequence('eslint');
//   });
//
//   watch(config.sass.src, function(){
//     runSequence('sass');
//   });
//
//   watch(config.images.src, function(){
//     runSequence('images');
//   });
//
//   watch(config.fonts.src, function(){
//     runSequence('fonts');
//   });
//
//   watch([config.markup.src, config.markup.settings.basepath + config.markup.partialsGlob], function(){
//     runSequence('markup');
//   });
//   // Watchify will watch and recompile our JS, so no need to gulp.watch it
// });
