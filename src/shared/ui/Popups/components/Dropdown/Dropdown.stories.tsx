import type { Meta, StoryObj } from '@storybook/react';
import ThemeDecorator from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { Button } from '../../../Button/Button';
import { Dropdown } from './Dropdown';

const meta: Meta<typeof Dropdown> = {
   title: 'shared/Dropdown',
   component: Dropdown,
   parameters: {},
   tags: ['autodocs'],
   argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Primary: Story = {
   args: {
      trigger: <Button>Open</Button>,
      items: [
         {
            content: 'first',
         },
         {
            content: 'second',
         },
         {
            content: 'third',
         },
      ],
   },
};

export const PrimaryDark: Story = {
   args: {
      trigger: <Button>Open</Button>,
      items: [
         {
            content: 'first',
         },
         {
            content: 'second',
         },
         {
            content: 'third',
         },
      ],
   },
   decorators: [
      (Story) => (
         <ThemeDecorator theme={Theme.DARK}>
            <Story />
         </ThemeDecorator>
      ),
   ],
};

export const PrimaryOrange: Story = {
   args: {
      trigger: <Button>Open</Button>,
      items: [
         {
            content: 'first',
         },
         {
            content: 'second',
         },
         {
            content: 'third',
         },
      ],
   },
   decorators: [
      (Story) => (
         <ThemeDecorator theme={Theme.ORANGE}>
            <Story />
         </ThemeDecorator>
      ),
   ],
};
