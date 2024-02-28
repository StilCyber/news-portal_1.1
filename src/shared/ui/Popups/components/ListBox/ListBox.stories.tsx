import type { Meta, StoryObj } from '@storybook/react';
import ThemeDecorator from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { items } from '@/shared/const/storybook';
import { ListBox } from './ListBox';

const meta: Meta<typeof ListBox> = {
   title: 'shared/ListBox',
   component: ListBox,
   parameters: {},
   tags: ['autodocs'],
   argTypes: {},
};

export default meta;

type Story = StoryObj<typeof ListBox>;

export const PrimaryTopLeft: Story = {
   args: {
      items,
      direction: 'top left',
      value: '123',
   },
};

export const PrimaryTopLeftDark: Story = {
   args: { items, direction: 'top left', value: '123' },
   decorators: [
      (Story) => (
         <ThemeDecorator theme={Theme.DARK}>
            <Story />
         </ThemeDecorator>
      ),
   ],
};

export const PrimaryTopLeftOrange: Story = {
   args: { items, direction: 'top left', value: '123' },
   decorators: [
      (Story) => (
         <ThemeDecorator theme={Theme.ORANGE}>
            <Story />
         </ThemeDecorator>
      ),
   ],
};

export const PrimaryTopRight: Story = {
   args: {
      items,
      direction: 'top right',
      value: '123',
   },
};

export const PrimaryTopRightDark: Story = {
   args: { items, direction: 'top right', value: '123' },
   decorators: [
      (Story) => (
         <ThemeDecorator theme={Theme.DARK}>
            <Story />
         </ThemeDecorator>
      ),
   ],
};

export const PrimaryTopRightOrange: Story = {
   args: { items, direction: 'top right', value: '123' },
   decorators: [
      (Story) => (
         <ThemeDecorator theme={Theme.ORANGE}>
            <Story />
         </ThemeDecorator>
      ),
   ],
};

export const PrimaryBottomLeft: Story = {
   args: {
      items,
      direction: 'bottom left',
      value: '123',
   },
};

export const PrimaryBottomLeftDark: Story = {
   args: { items, direction: 'bottom left', value: '123' },
   decorators: [
      (Story) => (
         <ThemeDecorator theme={Theme.DARK}>
            <Story />
         </ThemeDecorator>
      ),
   ],
};

export const PrimaryBottomLeftOrange: Story = {
   args: { items, direction: 'bottom left', value: '123' },
   decorators: [
      (Story) => (
         <ThemeDecorator theme={Theme.ORANGE}>
            <Story />
         </ThemeDecorator>
      ),
   ],
};

export const PrimaryBottomRight: Story = {
   args: {
      items,
      direction: 'bottom right',
      value: '123',
   },
};

export const PrimaryBottomRightDark: Story = {
   args: { items, direction: 'bottom right', value: '123' },
   decorators: [
      (Story) => (
         <ThemeDecorator theme={Theme.DARK}>
            <Story />
         </ThemeDecorator>
      ),
   ],
};

export const PrimaryBottomRightOrange: Story = {
   args: { items, direction: 'bottom right', value: '123' },
   decorators: [
      (Story) => (
         <ThemeDecorator theme={Theme.ORANGE}>
            <Story />
         </ThemeDecorator>
      ),
   ],
};
