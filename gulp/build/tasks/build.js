var gulp = require('gulp');
var viewPipe = require('../pipes/html/viewPipe');


gulp.task('_htmlTask', function () {
    return viewPipe;
});

var _build = gulp.task('_build', ['_htmlTask']);

module.exports = _build;