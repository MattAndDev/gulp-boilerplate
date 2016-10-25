import gulp from 'gulp'
import clean from './clean.js'



gulp.task('base', gulp.series(
  clean
))
