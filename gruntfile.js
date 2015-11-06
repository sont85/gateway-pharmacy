module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'public/css/style.css': 'sass/style.scss'
        }
      }
    },
    uglify: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'public/javascripts/main.min.js': 'javascripts/main.js'
        }
      }
    },
    watch: {
      sass: {
        files: ['sass/style.scss', 'sass/_base.scss'],
        tasks: ['sass']
      },
      javascripts: {
        files: ['javascripts/main.js'],
        tasks: ['uglify']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['sass', 'uglify']);
}
