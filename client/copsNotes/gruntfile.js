/*
module.exports = function(grunt){

  "use strict";

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-less');

  grunt.initConfig({
    //read into pkg
    pkg: grunt.file.readJSON('./package.json'),
    
    //watch less file and compile into css
    less:{
      development:{
        options:{
          paths:["./www/css/less"]
        },
        files:{
          "./www/css/style.css":"./www/css/less/style.less"
        }
      }
    },

    watch: {
      files: ['./www/css/*'],
      tasks: ['less']
    }
  });


    //register tasks   
  grunt.regitserTask('startWatch',['watch']);
  grunt.registerTask('compileLess','less');
  grunt.registerTask('default','less');

};


*/

'use strict';

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        // Task configuration.
        less: {
          development:{
            options:{
              paths:["www/css/less"]
            },
            files:{
              "www/css/style.css":"www/css/less/style.less"
            }
          }
        },
        watch: {
            lessFile:{
                files:['www/css/**/*.less'],
                tasks:['less']
            }
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-nodeunit');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');

    // Default task.
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('compileLess', ['less']);

};
