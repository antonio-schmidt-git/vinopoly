var gulp = require('gulp');
var runSequence = require('run-sequence');

var _clean = require('./clean');
var _build = require('./build');

var _reBuild = gulp.task('_re-build', function(){
    runSequence('_clean', '_build');
});

module.exports = _reBuild;