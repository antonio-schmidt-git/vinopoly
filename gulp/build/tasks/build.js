var gulp = require('gulp');
var getPipe = require('../../utils/getPipe');

gulp.task('_htmlTask', getPipe('build/pipes/html/htmlPipe'));

var _build = gulp.task('_build', ['_htmlTask']);

module.exports = _build;