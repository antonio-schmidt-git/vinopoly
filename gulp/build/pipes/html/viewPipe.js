var gulp = require('gulp');
var config = require('../../../config')();

function _viewPipe() {
    gulp
        .src(config.sharedViewFiles)
        .pipe(gulp.dest('dist'));
}

module.exports = _viewPipe;