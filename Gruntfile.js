module.exports = function(grunt) {

    const sass = require('node-sass');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                files: {
                    'css/style.min.css': 'scss/main.scss'
                }
            },
            options: {
                implementation: sass,
                style: 'compressed',
                sourcemap: true
            }
        },
        autoprefixer:{
            dist:{
                options: {
                    map: true
                },
                files:{
                    'css/style.min.css': 'css/style.min.css'
                }
            }
        },
        watch: {
            styles: {
                files: ['scss/*.scss'],
                tasks: ['sass'],
                options: {
                    spawn: false
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['sass','autoprefixer', 'watch']);

};