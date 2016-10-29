import gulp from 'gulp'
import config from '../config'
import size from 'gulp-filesize'
import uglifyJS from 'gulp-uglify'

// ============================================
// Uglify task
// ============================================
//  Comrpesses and uglifies js
// ============================================

function uglify () {
  return gulp.src(config.production.jsSrc)
    .pipe(uglify())
    .pipe(gulp.dest(config.production.jsDest))
    .pipe(size())
}

uglify.displayName = 'uglify'
uglify.description = 'Uglifies and compresses JavaScript files'

export default uglify
