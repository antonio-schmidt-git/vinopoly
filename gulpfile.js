var gulp = require('gulp');

// INSTALL
gulp.task('install', ['_install']);

// INIT
gulp.task('dev', ['_dev']);

// BUILD
gulp.task('build', ['_re-build']);


var inlineAngularTemplates = require('gulp-inline-angular-templates');
gulp.task('templates', function () {
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
});



// USED TASKS FOR BUILD (at the end because of WebStorm gulp view, to have runnable tasks first)
var _install = require('./gulp/environment/install');
var _reBuild = require('./gulp/build/tasks/re-build');
var _dev = require('./gulp/dev/tasks/dev');