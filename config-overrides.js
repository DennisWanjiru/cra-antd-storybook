const { override, fixBabelImports, addLessLoader, addBabelPlugins } = require('customize-cra');
const path = require('path');
const fs  = require('fs');
const lessToJs = require('less-vars-to-js');
const themeVars = lessToJs(fs.readFileSync(path.join(__dirname, './src/antTheme.less'), 'utf8'));

module.exports = {
  jest: (config) => {
    config.setupFiles = ['<rootDir>/jest.setup.js'];
    return config;
  },
  webpack: override(
    ...addBabelPlugins('macros'),
    fixBabelImports('import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: true,
    }),
    addLessLoader({
      javascriptEnabled: true,
      modifyVars: themeVars,
    }),
  ),
}