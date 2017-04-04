// see `browserSync.js` for live update builds.
import gulp from 'gulp'
import webPack from 'webpack'
import getWebpackConfig from '../util/getWebpackConfig'
import logger from '../util/bundleLogger'

// ============================================
// Webpack task
// ============================================
//  Webpack magic
// ============================================


function webpack (done) {
  const config = getWebpackConfig(global.env)
  webPack(config, (err, stats) => {
    logger(err, stats)
    cb()
  })
}

// Description
webpack.displayName = 'webpack'
webpack.description = 'the webpack magic'

// Export
export default twig
