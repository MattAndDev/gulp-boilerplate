// =======================================================================
// Animator.js
// =======================================================================
// Used to aniamte all UX via raf
// =======================================================================


// Animator class
// =======================================================================

class runtime {

  start () {
    this.renderer()
  }

  renderer = () => {
    window.requestAnimationFrame(this.renderer)
  }

}

export default Animator
