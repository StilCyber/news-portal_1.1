import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import avatar from 'shared/assets/test/storybook.jpg';
import ProfilePage from './ProfilePage';

import StoreDecorator from 'shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof ProfilePage> = {
   title: 'pages/ProfilePage',
   component: ProfilePage,
   parameters: {},
   tags: ['autodocs'],
   argTypes: {},
};

export default meta;

type Story = StoryObj<typeof ProfilePage>;

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
