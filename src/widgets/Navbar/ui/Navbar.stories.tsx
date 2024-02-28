import type { Meta, StoryObj } from '@storybook/react';
import ThemeDecorator from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { Navbar } from './Navbar';

const meta: Meta<typeof Navbar> = {
   title: 'widget/Navbar',
   component: Navbar,
   parameters: {},

   tags: ['autodocs'],

   argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Navbar>;

export const Light: Story = {
   args: {},
};

export const Dark: Story = {
   args: {},
   decorators: [
      (Story) => (
         <ThemeDecorator theme={Theme.DARK}>
            <Story />
         </ThemeDecorator>
      ),
   ],
};
