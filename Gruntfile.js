module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                options: {
                    compress: true,
                    optimization: 2,
                    sourceMap: true,
                    sourceMapFileInline: true
                },
                files: {
                    "css/style.min.css": "less/main.less"
                }
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
                files: ['less/*.less'],
                tasks: ['less','autoprefixer'],
                options: {
                    spawn: false
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['less','autoprefixer', 'watch']);

};