function _htmlPipe(gulp, plugins) {
    return function () {
        gulp
            //.src('src/**/*.html')
            .src('src/shared/views/index.html')
            .pipe(gulp.dest('dist'));
    };
}

module.exports = _htmlPipe;