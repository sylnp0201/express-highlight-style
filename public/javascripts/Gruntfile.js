module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    browserify: {
      build: {
        src: ["./node_modules/markdown/lib/index.js"],
        dest: ["./public/javascripts/bundle.js"]
        options: {
          alias: ["./node_modules/markdown/lib/index.js:markdown"] 
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
  grunt.registerTask('default', ['nodemon']);

};
