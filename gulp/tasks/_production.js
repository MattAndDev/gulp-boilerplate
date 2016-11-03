'use strict'

import gulp from 'gulp'
import minifyCss from './minifyCss'
import minifyJs from './minifyJs'

// Run this to compress all the things!
gulp.task('production', gulp.series(
  'base',
  gulp.parallel(minifyCss, minifyJs)
))
