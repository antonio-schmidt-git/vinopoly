var path = require('path');

var config = {};

config.optimize = false;

config.srcPath = 'src';
config.distPath = 'dist';
config.sharedFolder = 'shared';
config.componentsFolder = 'components';
config.viewFileSelector = 'views/**/*.html';
config.templateFileSelector = 'templates/**/*.html';

config.sharedPath = path.join(config.srcPath, config.sharedFolder);
config.sharedViewFiles = path.join(config.sharedPath, config.viewFileSelector);
config.sharedTemplateFiles = path.join(config.sharedPath, config.templateFileSelector);

config.componentsPath = path.join(config.srcPath, config.componentsFolder);
config.componentsSubFolderPath = path.join(config.componentsPath, '/**/');
config.componentsViewFiles = path.join(config.componentsSubFolderPath, config.viewFileSelector);
config.componentsTemplateFiles = path.join(config.componentsSubFolderPath, config.templateFileSelector);

config.viewFiles = [config.sharedViewFiles, config.componentsViewFiles];
config.templateFiles = [config.sharedTemplateFiles, config.componentsTemplateFiles];

module.exports = config;