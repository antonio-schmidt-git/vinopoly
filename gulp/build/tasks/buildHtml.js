var gulp = require('gulp');
var viewPipe = require('../pipes/html/viewPipe');
var templatePipe = require('../pipes/html/templatePipe');


gulp.task('_buildViews', function () {
    return viewPipe();
});

var _buildHtml = gulp.task('_buildHtml', ['_buildViews'], function(){
    return templatePipe();
});

module.exports = _buildHtml;