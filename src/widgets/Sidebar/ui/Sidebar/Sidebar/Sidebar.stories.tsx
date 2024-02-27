import type { Meta, StoryObj } from '@storybook/react';
import ThemeDecorator from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import StoreDecorator from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { StateSchema } from '@/app/providers/StoreProvider';
import { Sidebar } from './Sidebar';

const meta: Meta<typeof Sidebar> = {
   title: 'widget/Sidebar',
   component: Sidebar,
   parameters: {},

   tags: ['autodocs'],

   argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Sidebar>;

const state: DeepPartial<StateSchema> = {
   user: {
      authData: { id: '1', username: '132' },
   },
};

export const PrimaryNotAuth: Story = {
   args: {},
   decorators: [
      (Story) => (
         <ThemeDecorator theme={Theme.LIGHT}>
            <StoreDecorator>
               <Story />
            </StoreDecorator>
         </ThemeDecorator>
      ),
   ],
};

export const PrimaryNotAuthDark: Story = {
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

export const PrimaryAuth: Story = {
   args: {},
   decorators: [
      (Story) => (
         <StoreDecorator state={state}>
            <Story />
         </StoreDecorator>
      ),
   ],
};

export const PrimaryAuthDark: Story = {
   args: {},
   decorators: [
      (Story) => (
         <ThemeDecorator theme={Theme.DARK}>
            <StoreDecorator state={state}>
               <Story />
            </StoreDecorator>
         </ThemeDecorator>
      ),
   ],
};
