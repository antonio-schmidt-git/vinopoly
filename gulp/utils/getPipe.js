var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

function _getPipe(task) {
    return require('../' + task)(gulp, plugins);
}

module.exports = _getPipe;