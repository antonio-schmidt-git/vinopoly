var gulp = require('gulp');
var getTask = require('./gulp/utils/getTask');

// INSTALL
gulp.task('install', getTask('environment/install'));

// INIT
gulp.task('dev', ['_dev']);

// BUILD
gulp.task('build', ['_build']);



// USED TASKS FOR BUILD (at the end because of WebStorm gulp view, to have runnable tasks first)
var _build = require('./gulp/build/tasks/build');
var _dev = require('./gulp/dev/tasks/dev');