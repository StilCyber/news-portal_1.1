import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ThemeDecorator from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { tabs } from '@/shared/const/storybook';
import { Tabs } from './Tabs';

const meta: Meta<typeof Tabs> = {
   title: 'shared/Tabs',
   component: Tabs,
   parameters: {},
   tags: ['autodocs'],
   argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Tabs>;

export const Primary: Story = {
   args: { tabs, value: 'tab 2', onTabClick: action('onTabClick') },
};

export const PrimaryDark: Story = {
   args: { tabs },
   decorators: [
      (Story) => (
         <ThemeDecorator theme={Theme.DARK}>
            <Story />
         </ThemeDecorator>
      ),
   ],
};

export const PrimaryOrange: Story = {
   args: { tabs },
   decorators: [
      (Story) => (
         <ThemeDecorator theme={Theme.ORANGE}>
            <Story />
         </ThemeDecorator>
      ),
   ],
};
