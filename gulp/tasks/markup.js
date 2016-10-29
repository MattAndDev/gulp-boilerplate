import gulp from 'gulp'
import config from '../config'
import browserSync from 'browser-sync'
import include from 'gulp-file-include'
import rename from 'gulp-rename'
import minifyHTML from 'gulp-minify-html'
import handleErrors from '../util/handleErrors'

// ============================================
// Markup task
// ============================================
//  Compiles html partials and minifies
// ============================================


function markup () {
  return gulp.src(config.markup.src)
    .pipe(include(config.markup.settings))
    .on('error', handleErrors)
    .pipe(rename({extname: ''}))
    .pipe(rename({extname: '.html'}))
    .pipe(minifyHTML({spare: true}))
    .pipe(gulp.dest(config.markup.dest))
    .pipe(browserSync.reload({stream: true}))
}

// Description
markup.displayName = 'makrup'
markup.description = 'Compiles and minifies html templates'

// Export
export default markup
