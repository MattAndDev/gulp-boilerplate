// =======================================================================
// Settings.js
// =======================================================================
// Used to store global client data
// =======================================================================


// Importing libs
// =======================================================================

import featurejs from 'featurejs';
import $ from 'jquery';


// Settings class
// =======================================================================

class Settings {

  constructor() {

    // Initialises all properties
    this.init()

    // Add event listeners to update properties
    this.addEventListeners()

  }

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
      $('html').addClass('touch');
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
      $('html').addClass('no-touch');
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
    });

    // Resize (with timeout)
    window.addEventListener('resize', () => {
      clearTimeout(this.resize.timeout);
      this.resize.timeout = setTimeout(() => {
        this.window.x = window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth
        this.window.y = window.innerHeight|| document.documentElement.clientHeight|| document.getElementsByTagName('body')[0].clientHeight
        console.log(this);
      }, this.resize.delay);
    });

    // Mousemove
    window.addEventListener('mousemove', (e) => {
      this.mouse.x = e.clientX
      this.mouse.y = e.clientY
    });
  }

}

export default Settings
