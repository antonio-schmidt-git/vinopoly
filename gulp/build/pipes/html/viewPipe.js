var gulp = require('gulp');
var config = require('../../../config');
var htmlOptimizationPipe = require('./htmlOptimizationPipe');

function _viewPipe() {
    return gulp
        .src(config.viewFiles)
        .pipe(htmlOptimizationPipe())
        .pipe(gulp.dest('dist'));
}

module.exports = _viewPipe();