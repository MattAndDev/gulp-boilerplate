import gulp from 'gulp'
import clean from './clean'
import bundler from './bundler'
import server from './server'



gulp.task('base', gulp.series(
  gulp.parallel(clean, server),
  gulp.parallel(bundler)
))
