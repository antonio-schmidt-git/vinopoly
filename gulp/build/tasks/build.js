var gulp = require('gulp');
var getTask = require('../../utils/getTask');

gulp.task('_htmlTask', getTask('build/pipes/html/htmlPipe'));

var _build = gulp.task('_build', ['_htmlTask']);

module.exports = _build;