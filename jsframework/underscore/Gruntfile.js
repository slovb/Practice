module.exports = function(grunt) {

  // Load grunt-* dependencies
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  // Project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    bower: {
      all: {
        dest: 'build/app/lib/'
      }
    },
    concat: {
      css: {
        src: ['build/staging/sass/**/*.css', 'build/hotfix/sass/**/*.css'], // This only work if the css files are order independent
        dest: 'build/staging/css/style.css'
      }
    },
    connect: {
      server: {
        options: {
          port: 9001,
          hostname: '*',
          base: 'build/app',
          keepalive: true,
          livereload: true
        }
      }
    },
    copy: {
      buildHtml: {
        expand: true,
        cwd: 'source/html/',
        src: '**/*.html',
        dest: 'build/staging/html/'
      },
      deployHtml: {
        expand: true,
        cwd: 'build/staging/html/',
        src: '**/*.html',
        dest: 'build/app/'
      },
      deployHtmlMin: {
        expand: true,
        cwd: 'build/staging/html/',
        src: '**/*.html',
        dest: 'build/min/'
      },
      buildJS: {
        expand: true,
        cwd: 'source/',
        src: 'js/**/*.js',
        dest: 'build/staging/'
      },
      buildJSHotfix: {
        expand: true,
        cwd: 'hotfix/',
        src: 'js/**/*.js',
        dest: 'build/staging/'
      },
      deployJS: {
        expand: true,
        cwd: 'build/staging/',
        src: 'js/**/*.js',
        dest: 'build/app/'
      },
      deployJSMin: {
        expand: true,
        cwd: 'build/staging/min/',
        src: 'js/**/*.js',
        dest: 'build/min/'
      },
      deployCSS: {
        expand: true,
        cwd: 'build/staging/',
        src: 'css/style.css',
        dest: 'build/app/'
      },
      deployCSSMin: {
        expand: true,
        cwd: 'build/staging/min/',
        src: 'css/style.css',
        dest: 'build/min/'
      }
    },
    cssmin: {
      target: {
        files: {
          'build/staging/min/css/style.css': ['build/staging/css/style.css']
        }
      }
    },
    htmlhint: {
      options: {
        'tag-pair': true,
        'tagname-lowercase': false,
        'attr-lowercase': false,
        'attr-value-double-quotes': true,
        'doctype-first': true,
        'spec-char-escape': true,
        'id-unique': true,
        'head-script-disabled': true,
        'style-disabled': true
      },
      src: ['source/html/**/*.html']
    },
    jshint: {
      options: {
        globals: {
          module: true
        }
      },
      files: ['gruntfile.js', 'source/js/**/*.js']
    },
    open: {
      all: {
        path: 'http://localhost:<%= connect.server.options.port %>'
      }
    },
    sass: {
      options: {
        sourcemap: 'none'
      },
      build: {
        files: [{
          expand: true,
          cwd: 'source/sass',
          src: ['**/*.scss'],
          dest: 'build/staging/sass',
          ext: '.css'
        }]
      },
      hotfix: {
        files: [{
          expand: true,
          cwd: 'hotfix/sass',
          src: ['**/*.scss'],
          dest: 'build/hotfix/sass',
          ext: '.css'
        }]
      },
    },
    scsslint: {
      allFiles: [
        'source/sass/*.scss',
        'hotfix/sass/*.scss'
      ],
      options: {
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      target: {
        files: [{
          expand: true,
          cwd: 'build/staging/js',
          src: '**/*.js',
          dest: 'build/staging/min/js'
        }]
      },
      lib: {
        files: {
          'build/min/lib/lib.js': 'build/app/lib/bower.js'
        }
      }
    },
    watch: {
      buildJs: {
        files: ['source/js/**/*.js', 'hotfix/js/**/*.js'],
        tasks: ['preJs', 'buildJs']
      },
      deployJs: {
        files: ['build/staging/js/**/*.js'],
        tasks: ['minJs', 'deployJs', 'deployJsMin'],
        options: {
          livereload: true
        }
      },
      builCss: {
        files: ['source/sass/**/*.scss', 'hotfix/sass/**/*.scss'],
        tasks: ['preCss', 'buildCss']
      },
      deployCss: {
        files: ['build/staging/css/**/*.css'],
        tasks: ['minCss', 'deployCss', 'deployCssMin'],
        options: {
          livereload: true
        }
      },
      buildHtml: {
        files: ['source/html/**/*.html'],
        tasks: ['preHtml', 'buildHtml']
      },
      deployHtml: {
        files: ['build/staging/html/**/*.html'],
        tasks: ['minHtml', 'deployHtml', 'deployHtmlMin'],
        options: {
          livereload: true
        }
      }
    }
  });

  /**
   * Tasks
   */

  // JS
  grunt.registerTask('preJs', ['jshint']);
  grunt.registerTask('buildJs', ['copy:buildJS', 'copy:buildJSHotfix']);
  grunt.registerTask('minJs', ['uglify:target']);
  grunt.registerTask('deployJs', ['copy:deployJS']);
  grunt.registerTask('deployJsMin', ['copy:deployJSMin']);
  grunt.registerTask('js', ['preJs', 'buildJs', 'minJs', 'deployJs', 'deployJsMin']);

  // CSS
  grunt.registerTask('preCss', ['scsslint']);
  grunt.registerTask('buildCss', ['sass', 'concat:css']);
  grunt.registerTask('minCss', ['cssmin']);
  grunt.registerTask('deployCss', ['copy:deployCSS']);
  grunt.registerTask('deployCssMin', ['copy:deployCSSMin']);
  grunt.registerTask('css', ['preCss', 'buildCss', 'minCss', 'deployCss', 'deployCssMin']);

  // HTML
  grunt.registerTask('preHtml', ['htmlhint']);
  grunt.registerTask('buildHtml', ['copy:buildHtml']);
  grunt.registerTask('minHtml', []);
  grunt.registerTask('deployHtml', ['copy:deployHtml']);
  grunt.registerTask('deployHtmlMin', ['copy:deployHtmlMin']);
  grunt.registerTask('html', ['preHtml', 'buildHtml', 'minHtml', 'deployHtml', 'deployHtmlMin']);

  // LIB
  grunt.registerTask('lib', ['bower', 'uglify:lib']);

  // DEFAULT
  grunt.registerTask('pre', ['preJs', 'preCss', 'preHtml']);
  grunt.registerTask('build', ['buildJs', 'buildCss', 'buildHtml']);
  grunt.registerTask('min', ['minJs', 'minCss', 'minHtml']);
  grunt.registerTask('deploy', ['deployJs', 'deployCss', 'deployHtml']);
  grunt.registerTask('deployMin', ['deployJsMin', 'deployCssMin', 'deployHtmlMin']);
  grunt.registerTask('default', ['pre', 'build', 'min', 'deploy', 'deployMin', 'lib']);
};

