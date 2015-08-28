var gulp = require('gulp');
var clean = require('gulp-clean');

var _clean = gulp.task('_clean', function () {
    return gulp.src('./dist', {read: false})
        .pipe(clean());
});

module.exports = _clean;