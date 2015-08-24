var gulp = require('gulp');
var install = require("gulp-install");

gulp.task('init', function() {
    gulp
        .src(['package.json','bower.json'])
        .pipe(install());
});