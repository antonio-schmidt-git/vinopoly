var gulp = require('gulp');
var config = require('../../../config');
var htmlOptimizationPipe = require('./htmlOptimizationPipe');
var inlineAngularTemplates = require('gulp-inline-angular-templates');

function _templatePipe() {
    var inlineTemplateOptions = {
        base: 'dist/templates',
        prefix: '/',
        selector: 'body',
        method: 'append',
        unescape: {
            '&lt;': '<', '&gt;': '>', '&apos;': '\'', '&amp;': '&'
        }
    };

    return gulp.src(config.templateFiles)
        .pipe(inlineAngularTemplates('dist/index.html', inlineTemplateOptions));
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