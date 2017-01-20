import gulp from 'gulp'
import browserify from 'browserify'
import gutil from 'gulp-util'
import tap from 'gulp-tap'
import sourcemaps from 'gulp-sourcemaps'
import config from '../config'
import babel from 'babelify'
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

var opts = assign({}, watchify.args, config.browserify.config);
var b = watchify(browserify(opts));

// add transformations here
function bundler () {
  return b.bundle()
    // log errors if they happen
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .pipe(source('main.js'))
    // optional, remove if you don't need to buffer file contents
    .pipe(buffer())
    // optional, remove if you dont want sourcemaps
    .pipe(sourcemaps.init({loadMaps: true})) // loads map from browserify file
       // Add transformation tasks to the pipeline here.
    .pipe(sourcemaps.write()) // writes .map file
    .pipe(gulp.dest('./dist/js'));
}

// Description
bundler.displayName = 'bundler'
bundler.description = 'Bundles JavaScript Entry files'

// Export task
module.exports = bundler
