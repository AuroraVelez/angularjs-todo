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
                files: ['app/js/**/*.js', 'tests/unit/*.js'],
                tasks: ['karma:continuous:run']
            },
            protractor: {
                files: ['app/js/**/*.js', 'tests/e2e/*.js'],
                tasks: ['protractor:continuous']
            }
        }
    });


    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-protractor-runner');

    grunt.registerTask('default', ['jshint']);
    grunt.registerTask('e2e-test', ['protractor:e2e']);

};