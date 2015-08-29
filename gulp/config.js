var path = require('path');

module.exports = function () {
    var config = {};

    config.viewFiles = 'views/**/*.html';
    config.srcPath = 'src';
    config.sharedFolder = 'shared';

    config.sharedPath = path.join(config.srcPath, config.sharedFolder);
    config.sharedViewFiles = path.join(config.sharedPath, config.viewFiles);


    return config;
};