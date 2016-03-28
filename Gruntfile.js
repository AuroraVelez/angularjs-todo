/**
 * Created by avelez on 3/23/16.
 */

'use strict';

module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            files: ['Gruntfile.js', 'app/**/*.js', 'tests/**/*.js']
        },
        clean: {
            tests: ['./tests/e2e/results']
        },
        karma: {
            unit: {
                configFile: './tests/karma.conf.js',
                autoWatch: true
            }
        },
        protractor: {
            options: {
                // Location of your protractor config file
                configFile: "./tests/protractor.conf.js",

                // Do you want the output to use fun colors?
                noColor: false,

                // Set to true if you would like to use the Protractor command line debugging tool
                // debug: true,

                // Additional arguments that are passed to the webdriver command
                args: { }
            },
            e2e: {
                options: {
                    // Stops Grunt process if a test fails
                    keepAlive: false
                }
            },
            continuous: {
                options: {
                    keepAlive: true
                }
            }
        },
        watch: {
            options: {
                livereload: true
            },
            jshint: {
                files: ['<%= jshint.files %>'],
                tasks: ['jshint']
            },
            karma: {
                files: ['app/scripts/**/*.js', 'tests/unit/*.js'],
                tasks: ['karma:continuous:run']
            },
            protractor: {
                files: ['app/scripts/**/*.js', 'tests/e2e/*.js'],
                tasks: ['protractor:continuous']
            }
        }
    });


    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-protractor-runner');
    grunt.loadNpmTasks('grunt-karma');

    grunt.registerTask('default', ['jshint']);
    grunt.registerTask('test:unit', ['karma:unit']);
    grunt.registerTask('test:e2e', ['clean','protractor:e2e', 'watch:protractor']);

};