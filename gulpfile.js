var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

function getTask(task) {
    return require('./build/tasks/' + task)(gulp, plugins);
}

// INSTALL
gulp.task('install', getTask('environment/install'));

// INIT


// BUILD