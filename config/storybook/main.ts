import type { StorybookConfig } from '@storybook/react-webpack5';
import { Configuration, DefinePlugin, RuleSetRule } from 'webpack';
import path from 'path';
import { buildCssLoader } from '../build/loaders/buildCssLoader';

const config: StorybookConfig = {
   stories: ['../../src/**/*.stories.@(js|jsx|ts|tsx)'],
   addons: [
      '@storybook/addon-links',
      {
         name: '@storybook/addon-essentials',
         options: {
            backgrounds: false,
         },
      },
      '@storybook/addon-onboarding',
      '@storybook/addon-interactions',
      'storybook-addon-mock',
      'storybook-addon-themes',
   ],
   framework: {
      name: '@storybook/react-webpack5',
      options: {
         builder: {
            useSWC: true,
         },
      },
   },
   swc: () => ({
      jsc: {
         transform: {
            react: {
               runtime: 'automatic',
            },
         },
      },
   }),
   docs: {
      autodocs: 'tag',
   },
   webpackFinal: async (config: Configuration) => {
      const paths = {
         build: '',
         html: '',
         entry: '',
         src: path.resolve(__dirname, '..', '..', 'src'),
         locales: '',
         buildLocales: '',
      };
      config!.resolve!.modules!.push(paths.src);
      config!.resolve!.extensions!.push('.ts', '.tsx');
      config!.resolve!.alias = {
         ...config!.resolve!.alias,
         '@': paths.src,
      };

      config!.module!.rules = config!.module!.rules!.map(
         // @ts-ignore
         (rule: RuleSetRule) => {
            if (/svg/.test(rule.test as string)) {
               return { ...rule, exclude: /\.svg$/i };
            }

            return rule;
         },
      );

      config!.module!.rules.push({
         test: /\.svg$/,
         use: ['@svgr/webpack'],
      });
      config!.module!.rules.push(buildCssLoader(true));

      config!.plugins!.push(
         new DefinePlugin({
            __IS_DEV__: JSON.stringify(true),
            __API__: JSON.stringify('https://testapi.ru'),
            __PROJECT__: JSON.stringify('storybook'),
         }),
      );
      // Return the altered config
      return config;
   },
};
export default config;
