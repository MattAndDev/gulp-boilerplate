import gulp from 'gulp'
import browserify from 'browserify'
import gutil from 'gulp-util'
import tap from 'gulp-tap'
import sourcemaps from 'gulp-sourcemaps'
import config from '../config'
import babel from 'babelify'
import _ from 'lodash'
import handleErrors from '../util/handleErrors'
import watchify from 'watchify'
import source from 'vinyl-source-stream'
import buffer from 'vinyl-buffer'
const assign = require('lodash.assign')

// ============================================
// Browserify task
// ============================================
//  Bundles all entry files found at config path
//  to a separate destinatio nfile with original naming
// ============================================



// add transformations here
function bundler (b, entry, index, done) {
  return b.bundle()
    // log errors if they happen
    .on('error', handleErrors)
    .pipe(source(entry.filename))
    // optional, remove if you don't need to buffer file contents
    .pipe(buffer())
    // optional, remove if you dont want sourcemaps
    .pipe(sourcemaps.init({loadMaps: true})) // loads map from browserify file
       // Add transformation tasks to the pipeline here.
    .pipe(sourcemaps.write()) // writes .map file
    .pipe(gulp.dest(entry.dest))
}

function createBundles (done) {
  _.each(config.browserify.configs, (entry, index) => {
    var opts = assign({}, watchify.args, entry)
    var b = watchify(browserify(opts))
    bundler(b, entry, index)
    if (index === config.browserify.configs.length - 1) {
      done()
    }
  })
}


// Description
bundler.displayName = 'bundler'
bundler.description = 'Bundles JavaScript Entry files'

// Export task
module.exports = createBundles
