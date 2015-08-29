var path = require('path');

var config = {};

config.optimize = true;

config.viewFiles = 'views/**/*.html';
config.srcPath = 'src';
config.sharedFolder = 'shared';
config.componentsFolder = 'components';

config.sharedPath = path.join(config.srcPath, config.sharedFolder);
config.sharedViewFiles = path.join(config.sharedPath, config.viewFiles);

config.componentsPath = path.join(config.srcPath, config.componentsFolder);
config.componentsSubFolderPath = path.join(config.componentsPath, '/**/');
config.componentViewFiles = path.join(config.componentsSubFolderPath, config.viewFiles);

config.viewFiles = [config.sharedViewFiles, config.componentViewFiles];

module.exports = config;