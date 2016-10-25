import gulp from 'gulp'
import clean from './clean'
import browserify from './browserify'



gulp.task('base', gulp.series(
  clean,
  gulp.parallel(browserify)
))
