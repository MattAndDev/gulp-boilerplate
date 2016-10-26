import Animator from './classes/Animator'
import Settings from './classes/Settings'
import featurejs from 'featurejs'

var domReady = function (callback) {
  document.readyState === 'interactive' || document.readyState === 'complete' ? callback() : document.addEventListener('DOMContentLoaded', callback)
}


domReady(() => {

  // Add the Settings class
  let settings = new Settings()

  // Add the Animator class
  let animator = new Animator()

  // =======================================================
  // Code some awesome things

})
