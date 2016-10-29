import gulp from 'gulp'
import server from './server'

gulp.task('watch', gulp.series(
  function setenv (done) {
    process.env.WATCH = 'true'
    done()
  }, 'base', server)
)
