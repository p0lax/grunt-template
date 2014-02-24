/**
 * Grunt compile project
 * @author polax
 * @date: 14.09.13
 *
 * For lunch task need run cmd in folder of the project
 * Install Node js
 * npm install -g grunt-cli
 * npm install grunt-contrib-jshint --save-dev
 * npm install grunt-contrib-uglify --save-dev
 * npm install grunt-contrib-concat --save-dev
 * npm install grunt-contrib-cssmin --save-dev
 * npm install grunt-assets-versioning --save-dev
 */
module.exports = function(grunt) {
    grunt.initConfig({
        jshint: {
            all: ['Gruntfile.js', 'scripts/src/*.js']
        },
        concat: {
            options: {
                separator: ';'
            },
            basic: {
                src: ['scripts/src/*.js'],
                dest: 'build/common.js'
            },
            extras: {
                src: ['scripts/lib/*.js'],
                dest: 'build/libs.js'
            }
        },
        uglify: {
            options: {
            },
            dist: {
                files: {
                    'build/release.min.js': ['build/common.js']
                }
            }
        },
        cssmin: {
            minify: {
                expand: true,
                cwd: 'styles',
                src: ['*.css', '!*.min.css'],
                dest: 'build/',
                ext: '.min.css'
            }
        },
        assets_versioning: {
            dist: {
                options: {
                    multitask: 'uglify'
                }
            }
        }
    });


    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-assets-versioning');

    grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'cssmin', 'assets_versioning']);
};