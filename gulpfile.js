'use strict';

var gulp = require('gulp');
var pkg = require('./package.json');

// CONFIG
//
var config = {
  pkg: pkg,
  src: {
    cwd: 'app',
    config: 'config/*.json',
    data: 'data/{,*/}*.json'
  },
  module: 'mgcrea.meetups.20141022.ngEurope'
};

require('ng-factory').application(gulp, config);

// ALIASES
//
var runSequence = require('run-sequence');
gulp.task('default', ['build']);
gulp.task('dist', ['build']);
gulp.task('test', function() {
  runSequence('ng-factory:test/clean', 'ng-factory:src/karma~init', 'ng-factory:src/karma');
});
gulp.task('build', function() {
  runSequence('ng-factory:dist/clean', 'ng-factory:src/views', ['ng-factory:dist/views', 'ng-factory:dist/copy']);
});
gulp.task('serve', function() {
  runSequence('ng-factory:src/clean', 'ng-factory:src/views', ['ng-factory:src/serve', 'ng-factory:src/watch']);
});
