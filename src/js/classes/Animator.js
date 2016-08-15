// =======================================================================
// Animator.js
// =======================================================================
// Used to aniamte all UX via raf
// =======================================================================


// Importing libs
// =======================================================================

import raf from 'raf'


// Animator class
// =======================================================================

class Animator {

  constructor() {

    // Initialises the aniamtor runtime, powered by requestAniamtionFrame
    this.runtime()
  }

  runtime = () => {
    raf(this.runtime)
  }

}

export default Animator
