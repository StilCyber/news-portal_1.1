import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import StoreDecorator from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import AboutPage from './AboutPage';

const meta: Meta<typeof AboutPage> = {
   title: 'pages/AboutPage',
   component: AboutPage,
   parameters: {},
   tags: ['autodocs'],
   argTypes: {},
};

export default meta;

type Story = StoryObj<typeof AboutPage>;

export const Primary: Story = {
   args: {},
   decorators: [
      (Story) => (
         <StoreDecorator>
            <Story />
         </StoreDecorator>
      ),
   ],
};

export const PrimaryDark: Story = {
   args: {},
   decorators: [
      (Story) => (
         <ThemeDecorator theme={Theme.DARK}>
            <StoreDecorator>
               <Story />
            </StoreDecorator>
         </ThemeDecorator>
      ),
   ],
};
