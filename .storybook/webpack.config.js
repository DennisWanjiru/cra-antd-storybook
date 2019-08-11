const path = require('path');
const fs  = require('fs');
const lessToJs = require('less-vars-to-js');
const themeVars = lessToJs(fs.readFileSync(path.join(__dirname, '../src/antTheme.less'), 'utf8'));

module.exports = async ({ config, mode }) => {

  config.module.rules.push({
      loader: 'babel-loader',
      exclude: /node_modules/,
      test: /\.(js|jsx)$/,
      options: {
          presets: ['@babel/react', '@babel/preset-env'],
          plugins: [
              ['import', {
                libraryName: 'antd',
                libraryDirectory: 'es',
                style: true
              }]
          ]
      },
  });

  config.module.rules.push({
      test: /\.less$/,
      loaders: [
          'style-loader',
          'css-loader',
          {
              loader: 'less-loader',
              options: {
                  modifyVars: themeVars,
                  javascriptEnabled: true
              }
          }
      ],
      include: [
        path.resolve(__dirname, '../src'),
        /[\\/]node_modules[\\/].*antd/
      ]
  });
  return config;
};


// const path = require('path')

// module.exports = async ({ config,mode }) =>{

//     console.dir(config.plugins, { depth: null }) || config;

//     // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
//     // You can change the configuration based on that.
//     // 'PRODUCTION' is used when building the static version of storybook.
  

//      /* Make whatever fine-grained changes you need */
    
//     // Here is the magic
//         // We push our config into the resolve.modules array
//         config.resolve.modules.push(path.resolve('./'))

       
    
//     return config;
//   };