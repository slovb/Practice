module.exports = function(grunt) {

  // Load grunt-* dependencies
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  // Project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
      server: {
        options: {
          port: 9001,
          hostname: '*',
          base: 'build',
          keepalive: true,
          livereload: true
        }
      }
    },
    open: {
      all: {
        path: 'http://localhost:<%= connect.server.options.port %>'
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
      src: ['source/**/*.html']
    },
    jshint: {
      options: {
        globals: {
          module: true
        }
      },
      files: ['gruntfile.js', 'source/**/*.js']
    },
    scsslint: {
      allFiles: ['source/*.scss'],
      options: {}
    },
    copy: {
      html: {
        expand: true,
        cwd: 'source/',
        src: '**/*.html',
        dest: 'build/'
      },
      js: {
        expand: true,
        cwd: 'source/',
        src: '**/*.js',
        dest: 'build/'
      },
      underscore: {
        expand: true,
        cwd: 'bower_components/underscore/',
        src: 'underscore.js',
        dest: 'build/'
      }
    },
    bower: {
      all: {
        dest: 'build/'
      }
    },
    sass: {
      options: {
        sourcemap: 'none'
      },
      build: {
        files: [{
          expand: true,
          cwd: 'source',
          src: ['**/*.scss'],
          dest: 'build',
          ext: '.css'
        }]
      }
    },
    watch: {
      markup: {
        files: ['source/**/*.html'],
        tasks: ['markup'],
        options: {
          livereload: true
        }
      },
      style: {
        files: ['source/**/*.scss'],
        tasks: ['style'],
        options: {
          livereload: true
        }
      },
      script: {
        files: ['source/**/*.js'],
        tasks: ['script'],
        options: {
          livereload: true
        }
      }
    }
  });

  /**
   * Tasks
   */
  grunt.registerTask('testMarkup', ['htmlhint']);
  grunt.registerTask('buildMarkup', ['copy:html']);
  grunt.registerTask('markup', ['testMarkup', 'buildMarkup']);

  grunt.registerTask('testStyle', ['scsslint']);
  grunt.registerTask('buildStyle', ['sass']);
  grunt.registerTask('style', ['testStyle', 'buildStyle']);

  grunt.registerTask('testScript', ['jshint']);
  grunt.registerTask('buildScript', ['copy:js', 'bower', 'copy:underscore']);
  grunt.registerTask('script', ['testScript', 'buildScript']);

  grunt.registerTask('test', ['testMarkup', 'testStyle', 'testScript']);
  grunt.registerTask('build', ['buildMarkup', 'buildStyle', 'buildScript']);
  grunt.registerTask('default', ['test', 'build']);
};

