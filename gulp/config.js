'use strict';

var dest = "./dist";
var src = './src';

module.exports = {


  destFolder: dest,



  // ==============================
  // browserify.js settings
  // ==============================


  browserify: {
    // A separate bundle will be generated for each
    // bundle config in the list below
    bundleConfigs: [{
      entries: src + '/js/main.js',
      dest: dest + '/js',
      outputName: 'main.js',
      // Additional file extentions to make optional
      extensions: ['.js'],
      // list of modules to make require-able externally
      require: ['jquery']
      // old: require: ['jquery', 'backbone/node_modules/underscore']
      // See https://github.com/greypants/gulp-starter/issues/87 for note about
      // why this is 'backbone/node_modules/underscore' and not 'underscore'
    // }, {
    //   entries: src + '/javascript/page.js',
    //   dest: dest + '/js',
    //   outputName: 'page.js',
    //   // list of externally available modules to exclude from the bundle
    //   external: ['jquery', 'underscore']
    }]
  },


  // ==============================
  // browserSync.js settings
  // ==============================

  browserSync: {
    port: 9000,
    server: {
      // Serve up our build folder
      baseDir: dest
    },
    notify: false,
    open: false,
    files: [
      dest + '/css/*',
      dest + '/js/*',
      dest + '*.html'
    ]
  },


  fonts: {
    src: src + '/fonts/**',
    dest: dest + '/fonts'
  },



  // ==============================
  // images.js settings
  // ==============================

  images: {
    src: src + "/images/**",
    dest: dest + "/images",

    // gulp-imagemin settings

    settings: {
    }
  },


  // ==============================
  // jslint.js settings
  // ==============================

  jslint: {
    srcJs: src + '/js/**/*.js'
  },



  // ==============================
  // markup.js settings
  // ==============================

  markup: {
    src: src + "/html/templates/*.tpl.html",
    dest: dest + "/",

    // gulp-file-include settings

    settings: {
      basepath: src + '/html/includes/',
      prefix : '@@'
    }
  },


  // ==============================
  // _production.js settings
  // ==============================


  production: {
    cssSrc: dest + '/css/*.css',
    jsSrc: dest + '/js/*.js',
    dest: dest,
    cssDest: dest + '/css',
    jsDest: dest + '/js'
  },


  // ==============================
  // sass.js settings
  // ==============================

  sass: {
    src: src + "/sass/**/*.{sass,scss}",
    dest: dest + '/css',

    // gulp-autoprefixer settings

    prefix: [
      'ie >= 9',
      'ie_mob >= 10',
      'ff >= 30',
      'chrome >= 34',
      'safari >= 7',
      'opera >= 23',
      'ios >= 7',
      'android >= 4.4',
      'bb >= 10'
    ],

    // gulp-sass settings

    settings: {
      indentedSyntax: true, // Enable .sass syntax!
      imagePath: 'images' // Used by the image-url helper
    }
  },

  // ==============================
  // sprite.js settings
  // ==============================


  svgSprite: {
    type: 'inline', // 'inline'
    src: src + '/icons',
    glob: '**/*.svg',
    dest: dest + '/images',
    removeFills: true,
    optionsInline: {
      mode: {
        symbol: {
          sprite: 'sprite.svg',
          dest: '.',
          render: {
            scss: {
              template: 'gulp/tpl/_sprite-inline.scss',
              dest: '../../src/sass/_sprite.scss'
            }
          }
        }
      }
    },
    optionsBackground: {
      mode: {
        css: {
          layout: 'horizontal',
          sprite: 'sprite.svg',
          dest: '.',
          render: {
            scss: {
              template: 'gulp/tpl/_sprite-background.scss',
              dest: '../../src/sass/_sprite.scss'
            }
          }
        }
      },
      variables: {
        cssPath: '../images/'
      }
    }
  }


};
