'use strict';

import gulp from 'gulp'
import clean from './gulp/tasks/clean'



gulp.task('standard', gulp.series(
  clean
))
