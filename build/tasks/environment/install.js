function _install(gulp, plugins) {
    return function () {
        gulp
            .src(['package.json', 'bower.json'])
            .pipe(plugins.install());
    };
}

module.exports = _install;