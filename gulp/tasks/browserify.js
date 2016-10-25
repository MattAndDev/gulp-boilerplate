import gulp from 'gulp'
import browserify from 'browserify'
import gutil from 'gulp-util'
import tap from 'gulp-tap'
import buffer from 'gulp-buffer'
import sourcemaps from 'gulp-sourcemaps'
import uglify from 'gulp-uglify'
import config from '../config'
import babel from 'babelify'

function browserifyTask () {

  return gulp.src(config.browserify.src, {read: false}) // no need of reading file because browserify does.

      // transform file objects using gulp-tap plugin
      .pipe(tap(function (file) {

        gutil.log('bundling ' + file.path)

        // replace file contents with browserify's bundle stream
        file.contents =
          browserify(file.path, config.browserify.config)
          .transform(babel, config.browserify.babel)
          .bundle()

      }))

      // transform streaming contents into buffer contents (because gulp-sourcemaps does not support streaming contents)
      .pipe(buffer())

      // load and init sourcemaps
      .pipe(sourcemaps.init({loadMaps: true}))

      // write sourcemaps
      .pipe(sourcemaps.write())

      .pipe(gulp.dest(config.browserify.dest))

}


// Exporting the task
module.exports = browserifyTask
