var gulp = require('gulp');
var gulpIf = require('gulp-if');
var config = require('../../../config');
var htmlOptimizationPipe = require('./htmlOptimizationPipe');

function _viewPipe() {
    return gulp
        .src(config.viewFiles)
        .pipe(gulpIf(config.optimize, htmlOptimizationPipe()))
        .pipe(gulp.dest('dist'));
}

module.exports = _viewPipe;