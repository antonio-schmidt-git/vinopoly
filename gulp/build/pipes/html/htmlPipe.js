function _htmlPipe(gulp, plugins) {
    return function () {
        gulp
            .src('src/**/*.html')
            .pipe(gulp.dest('dist'));
    };
}

module.exports = _htmlPipe;