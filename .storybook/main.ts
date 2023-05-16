import type { StorybookConfig } from '@storybook/nextjs';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import path from 'path';

const toPath = (_path) => path.join(process.cwd(), _path);

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-styling',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  webpackFinal: async (config) => {
    // for typescript absolute path
    config.resolve?.plugins?.push(new TsconfigPathsPlugin({}));

    // for using icon svg files : disable exisiting rules and add new rule
    const svgRule = config.module?.rules?.find((rule) => {
      const test = (rule as { test: RegExp }).test;
      return !test ? false : test.test('.svg');
    }) as { [key: string]: any };
    svgRule.exclude = /\.svg$/i;

    config.module?.rules?.push({
      test: /\.svg$/i,
      use: ['@svgr/webpack'],
    });

    return {
      ...config,
      resolve: {
        ...config.resolve,
        // for emotion global theme
        alias: {
          ...config.resolve?.alias,
          '@emotion/core': toPath('node_modules/@emotion/react'),
        },
      },
    };
  },
};
export default config;
