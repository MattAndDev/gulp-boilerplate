import gulp from 'gulp'
import config from '../config'
import browserSync from 'browser-sync'
import twig from 'gulp-twig'
import handleErrors from '../util/handleErrors'
import minifyHTML from 'gulp-minify-html'

// ============================================
// Markup task
// ============================================
//  Compiles html partials and minifies
// ============================================


function markup () {
  return gulp.src(config.markup.src)
    .pipe(twig())
    .pipe(minifyHTML({spare: true}))
    .pipe(gulp.dest(config.markup.dest))
    .pipe(browserSync.reload({stream: true}))
}

// Description
markup.displayName = 'makrup'
markup.description = 'Compiles and minifies html templates'

// Export
export default markup
