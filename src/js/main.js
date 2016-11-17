import runtime from './utils/runtime'
import settings from './utils/settings'

var domReady = function (callback) {
  document.readyState === 'interactive' || document.readyState === 'complete' ? callback() : document.addEventListener('DOMContentLoaded', callback)
}

domReady(() => {

  settings.on('resize', () => {})

  settings.on('scroll', () => {})

  settings.on('mousemove', () => {})

})
