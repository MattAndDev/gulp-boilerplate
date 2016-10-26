// =======================================================================
// Settings.js
// =======================================================================
// Used to store global client data
// =======================================================================


// Importing libs
// =======================================================================

import featurejs from 'featurejs';
import ee from 'event-emitter'



// Settings class
// =======================================================================

class Settings {

  constructor() {

    // Initialises all properties
    this.init()

    // Initialises the event emitters
    this.addEmitters()

    // Add event listeners to update properties
    this.addEventListeners()

  }


  // Initialises all properties
  init() {

    // window size
    this.window = {
      x : window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth,
      y : window.innerHeight|| document.documentElement.clientHeight|| document.getElementsByTagName('body')[0].clientHeight
    }

    // window scroll
    this.scroll = {
      x: window.pageXOffset || window.scrollLeft || document.body.scrollLeft,
      y: window.pageYOffset || window.pageYOffset || document.body.pageYOffset
    }

    // Is touch flag
    this.isTouch = feature.touch

    // Mouse position
    this.mouse = {
      x : 0,
      y : 0
    }

    // Mapping events
    if (feature.touch) {
      this.events = {
        click : 'touchend',
        mouseenter : 'touchstart',
        mouseleave : 'touchend',
        mousedown : 'touchstart',
        mouseup : 'touchend',
        mousemove : 'touchmove',
        hover : 'touchstart',
      }
    } else {
      this.events = {
        click : 'click',
        mouseenter : 'mouseenter',
        mouseleave : 'mouseleave',
        mousedown : 'mousedown',
        mouseup : 'mouseup',
        mousemove : 'mousemove',
        hover : 'hover',
      }
    }

    // resize vars
    this.resize = {
      timeout : false,
      delay :   250
    };


  }

  // Adding event emitters for the different properties changes
  addEmitters() {
    this.emitters = {
      window : ee({}), function(){},
      scroll : ee({}), function(){},
      mouse : ee({}), function(){}
    }
  }

  // Add event listener and emit events
  addEventListeners() {

    // Scroll
    window.addEventListener('scroll', () => {
      this.scroll.x =  window.pageXOffset || window.scrollLeft || document.body.scrollLeft
      this.scroll.y =  window.pageYOffset || window.pageYOffset || document.body.pageYOffset
      if (this.scroll.x == null) {
        this.scroll.x = 0
      }
      if (this.scroll.y == null) {
        this.scroll.y = 0
      }
      this.emitters.scroll.emit('change')
    });

    // Resize (with timeout)
    window.addEventListener('resize', () => {
      clearTimeout(this.resize.timeout);
      this.resize.timeout = setTimeout(() => {
        this.window.x = window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth
        this.window.y = window.innerHeight|| document.documentElement.clientHeight|| document.getElementsByTagName('body')[0].clientHeight
        this.emitters.window.emit('change')
      }, this.resize.delay);
    });

    // Mousemove
    window.addEventListener('mousemove', (e) => {
      this.mouse.x = e.clientX
      this.mouse.y = e.clientY
      this.emitters.mouse.emit('change')
    });
  }

}

export default Settings
