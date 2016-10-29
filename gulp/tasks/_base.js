import gulp from 'gulp'
import clean from './clean'
import bundler from './bundler'
import server from './server'
import fonts from './fonts'


gulp.task('base', gulp.series(
  gulp.parallel(clean),
  gulp.parallel(bundler, fonts, server)
))
