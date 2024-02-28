import React from 'react';
import { Preview } from '@storybook/react';
import StyleDecorator from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import ThemeDecorator from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '../../src/shared/const/theme';
import RouterDecorator from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import SuspenseDecorator from '../../src/shared/config/storybook/SuspenseDecorator/SuspenseDecorator';

const preview: Preview = {
   parameters: {
      actions: { argTypesRegex: '^on[A-Z].*' },
      controls: {
         matchers: {
            color: /(background|color)$/i,
            date: /Date$/i,
         },
      },
      layout: 'fullscreen',
      themes: {
         default: 'light',
         list: [
            { name: 'light', class: Theme.LIGHT, color: '#ffffff' },
            { name: 'dark', class: Theme.DARK, color: '#000000' },
            { name: 'orange', class: Theme.ORANGE, color: '#ffb005' },
         ],
      },
   },
   decorators: [
      (Story) => (
         <RouterDecorator>
            <StyleDecorator>
               <ThemeDecorator theme={Theme.LIGHT}>
                  <SuspenseDecorator>
                     <Story />
                  </SuspenseDecorator>
               </ThemeDecorator>
            </StyleDecorator>
         </RouterDecorator>
      ),
   ],
};

export default preview;
