import type { StorybookConfig } from "@storybook/react-webpack5";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
const CopyWebpackPlugin = require('copy-webpack-plugin');

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    '@storybook/addon-controls',
    '@storybook/addon-a11y',
    {
      name: "@storybook/addon-styling",
      options: {
        postCss: true,
      },
    },
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async (config) => {
    if (config.module && config.module.rules) {
      config.module.rules.push({
        test: /\.css$/,
        use: [
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                ident: "postcss",
                plugins: [tailwindcss, autoprefixer],
              },
            },
          },
        ],
      });

      config.module.rules.push({
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2|csv)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: '[name].[ext]',
              outputPath: 'static/media/', // Output directory for processed images
              publicPath: '/', // Public URL path to access the images
            },
          },
        ],
      });     
    }

    if (config.plugins) {
      // Add a new rule for copying static files to the output directory
      config.plugins.push(
        new CopyWebpackPlugin({
          patterns: [
            {
              from: 'src/stories/images',
              to: 'static/media',
            },
          ],
        })
      );
    }

    return config;
  },
  env: (config) => ({
    ...config,
    EXAMPLE_VAR: 'An environment variable configured in Storybook',
    IMG_BASE: 'http://localhost:6006/static/media/',
  }),
};
export default config;
