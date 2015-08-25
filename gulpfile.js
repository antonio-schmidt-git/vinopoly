var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

function getTask(task) {
    return require('./build/tasks/' + task)(gulp, plugins);
}

gulp.task('environment-install', getTask('environment/install'));

gulp.task('init', ['environment-install'], function () {});