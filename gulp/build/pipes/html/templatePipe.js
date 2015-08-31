var gulp = require('gulp');
var config = require('../../../config');
var htmlOptimizationPipe = require('./htmlOptimizationPipe');
var inlineAngularTemplates = require('gulp-inline-angular-templates');

function _templatePipe() {
    /*return gulp
     .src(config.viewFiles)
     .pipe(htmlOptimizationPipe())
     .pipe(gulp.dest('dist'));*/

    return gulp.src('src/shared/templates/**/*.html')
        .pipe(inlineAngularTemplates('dist/index.html', {
            base: 'dist/templates',
            prefix: '/',
            selector: 'body',
            method: 'append',
            unescape: {
                '&lt;': '<',
                '&gt;': '>',
                '&apos;': '\'',
                '&amp;': '&'
            }
        }))
        .pipe(gulp.dest('dist'));
}

module.exports = _templatePipe;


gulp.src('src/shared/templates/**/*.html')
    .pipe(inlineAngularTemplates('dist/index.html', {
        base: 'dist/templates',
        prefix: '/',
        selector: 'body',
        method: 'append',
        unescape: {
            '&lt;': '<',
            '&gt;': '>',
            '&apos;': '\'',
            '&amp;': '&'
        }
    }))
    .pipe(gulp.dest('dist'));