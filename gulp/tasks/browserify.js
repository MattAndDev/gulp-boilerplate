/* browserify task
   ---------------
   Bundle javascripty things with browserify!

   This task is set up to generate multiple separate bundles, from
   different sources, and to use Watchify when run from the default task.

   See browserify.bundleConfigs in gulp/config.js
*/
import gulp from 'gulp'
import browserify from 'browserify'
import gutil from 'gulp-util'
import tap from 'gulp-tap'
import buffer from 'gulp-buffer'
import sourcemaps from 'gulp-sourcemaps'
import uglify from 'gulp-uglify'
import config from '../config'
import babel from 'babelify'

function browserifyTask (devMode) {
  // console.log(config.browserify.src);
  return gulp.src(config.browserify.src, {read: false}) // no need of reading file because browserify does.

      // transform file objects using gulp-tap plugin
      .pipe(tap(function (file) {

        gutil.log('bundling ' + file.path)

        // replace file contents with browserify's bundle stream
        file.contents =
          browserify(file.path, config.browserify.config)
          .transform(babel, {
            presets:
              ['es2015', 'react'],
            plugins:
              ['transform-class-properties']
          })
          .bundle()

      }))

      // transform streaming contents into buffer contents (because gulp-sourcemaps does not support streaming contents)
      .pipe(buffer())

      // load and init sourcemaps
      .pipe(sourcemaps.init({loadMaps: true}))

      .pipe(uglify())

      // write sourcemaps
      .pipe(sourcemaps.write('./'))

      .pipe(gulp.dest(config.browserify.dest));

}

// gulp.task('browserify', function() {
//   return browserifyTask()
// })

// Exporting the task so we can call it directly in our watch task, with the 'devMode' option
module.exports = browserifyTask
