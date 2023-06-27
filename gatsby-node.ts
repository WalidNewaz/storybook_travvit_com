// const path = require('path');
import path from 'path';

interface CreateWebpackConfigProps {
  actions: any;
  getConfig: any;
}

exports.onCreateWebpackConfig = ({
  actions,
  getConfig,
}: CreateWebpackConfigProps) => {
  const config = getConfig();

  // Add the resolve configuration for react-native
  config.resolve.alias = {
    ...config.resolve.alias,
    'react-native$': 'react-native-web',
  };
  config.resolve.extensions.push('.web.js');

  // Add the necessary loaders for react-native
  config.module.rules.push({
    test: /\.(js|jsx|mjs|ts|tsx)$/,
    include: [
      path.resolve(__dirname, '../node_modules/react-native'),
      path.resolve(__dirname, '../node_modules/react-native-web'),
    ],
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        // presets: ['babel-preset-gatsby'],
        plugins: ['babel-plugin-react-native-web'],
      },
    },
  });

  // Add the necesary loader for files
  config.module.rules.push({
    test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2|csv)$/,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          esModule: false,
        },
      },
    ],
  });

  // // Customize the webpack config here
  // config.module.rules.push({
  //   test: /\.csv$/,
  //   use: 'csv-loader',
  // });

  actions.replaceWebpackConfig(config);
};
