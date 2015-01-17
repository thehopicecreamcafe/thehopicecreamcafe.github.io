module.exports = function (grunt) {

  grunt.initConfig({

    validation: {
        options: {
            reset: grunt.option('reset') || false,
            stoponerror: false,
        },
        files: {
            src: ['_site/*.html']
        }
    }

  });

  grunt.loadNpmTasks('grunt-html-validation');

  grunt.registerTask('default', ['validation']);

};
