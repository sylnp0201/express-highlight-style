module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    browserify: {
      build: {
        src: [
          "./node_modules/marked/lib/marked.js"
        ],
        dest: "./public/javascripts/bundle.js",
        options: {
          alias: [
            "./node_modules/marked/lib/marked.js:marked"
          ] 
        }
      }
    },

    nodemon: {
      dev: {
        script: "server.js"
      }
    }
  });


  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-express');
  grunt.loadNpmTasks('grunt-nodemon');

  // Default task(s).
  grunt.registerTask('default', ['browserify', 'nodemon']);

};
