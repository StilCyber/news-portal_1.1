import React from 'react';
import { Preview } from '@storybook/react';
import StyleDecorator from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import ThemeDecorator from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '../../src/app/providers/ThemeProvider/index';
import RouterDecorator from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';

const preview: Preview = {
   parameters: {
      actions: { argTypesRegex: '^on[A-Z].*' },
      controls: {
         matchers: {
            color: /(background|color)$/i,
            date: /Date$/i,
         },
      },
   },
   decorators: [
      (Story) => (
         <RouterDecorator>
            <StyleDecorator>
               <ThemeDecorator theme={Theme.LIGHT}>
                  <Story />
               </ThemeDecorator>
            </StyleDecorator>
         </RouterDecorator>
      ),
   ],
};

export default preview;
