var gulp = require('gulp');
var replace = require('gulp-replace');
var config = require('../../../config');
var lazyPipe = require('lazypipe');
var inject = require('gulp-inject');
var wrapper = require('gulp-wrapper');
var rename = require('gulp-rename');


function _templateSourcePipe() {
    return gulp.src(config.templateFiles)
        .pipe(wrapper({
            header: '<script type="text/ng-template" id="${filename}">\n',
            footer: '</script>\n'
        }));

}

function _templatePipe() {
    var injectOptions = {
        starttag: '<!-- inject:html -->',
        transform: function (filePath, file) {
            return file.contents.toString('utf8');
        }
    };

    return lazyPipe()
        .pipe(inject, _templateSourcePipe(), injectOptions);
}

module.exports = _templatePipe();