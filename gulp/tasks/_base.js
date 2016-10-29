import gulp from 'gulp'
import clean from './clean'
import bundler from './bundler'
import server from './server'
import fonts from './fonts'
import images from './images'
import markup from './markup'
import sass from './sass'
import sprite from './sprite'



gulp.task('base', gulp.series(
  gulp.parallel(clean),
  gulp.parallel(bundler, fonts, server, images, markup, sass, sprite)
))
