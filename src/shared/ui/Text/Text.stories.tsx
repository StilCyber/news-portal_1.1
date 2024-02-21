import type { Meta, StoryObj } from '@storybook/react';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextSize, TextTheme } from './Text';

const meta: Meta<typeof Text> = {
   title: 'shared/Text',
   component: Text,
   parameters: {
      layout: 'centered',
   },
   tags: ['autodocs'],
   argTypes: {},
   args: {},
};

export default meta;

type Story = StoryObj<typeof Text>;

export const TextPrimary: Story = {
   args: {
      title: 'Some title',
      text: 'Description',
   },
};

export const OnlyTitle: Story = {
   args: {
      title: 'Some title',
   },
};

export const OnlyText: Story = {
   args: {
      title: 'Some title',
   },
};

export const TextPrimaryDark: Story = {
   args: {
      title: 'Some title',
      text: 'Description',
   },
   decorators: [
      (Story) => (
         <ThemeDecorator theme={Theme.DARK}>
            <Story />
         </ThemeDecorator>
      ),
   ],
};

export const OnlyTitleDark: Story = {
   args: {
      title: 'Some title',
   },
   decorators: [
      (Story) => (
         <ThemeDecorator theme={Theme.DARK}>
            <Story />
         </ThemeDecorator>
      ),
   ],
};

export const OnlyTextDark: Story = {
   args: {
      title: 'Some title',
   },
   decorators: [
      (Story) => (
         <ThemeDecorator theme={Theme.DARK}>
            <Story />
         </ThemeDecorator>
      ),
   ],
};

export const Error: Story = {
   args: {
      title: 'Some title',
      text: 'Description',
      theme: TextTheme.ERROR,
   },
};

export const SizeL: Story = {
   args: {
      title: 'Some title',
      text: 'Description',
      size: TextSize.L,
   },
};

export const SizeLDark: Story = {
   args: {
      title: 'Some title',
      text: 'Description',
      size: TextSize.L,
   },
   decorators: [
      (Story) => (
         <ThemeDecorator theme={Theme.DARK}>
            <Story />
         </ThemeDecorator>
      ),
   ],
};

export const SizeLOrange: Story = {
   args: {
      title: 'Some title',
      text: 'Description',
      size: TextSize.L,
   },
   decorators: [
      (Story) => (
         <ThemeDecorator theme={Theme.ORANGE}>
            <Story />
         </ThemeDecorator>
      ),
   ],
};

export const SizeM: Story = {
   args: {
      title: 'Some title',
      text: 'Description',
      size: TextSize.M,
   },
};

export const SizeMDark: Story = {
   args: {
      title: 'Some title',
      text: 'Description',
      size: TextSize.M,
   },
   decorators: [
      (Story) => (
         <ThemeDecorator theme={Theme.DARK}>
            <Story />
         </ThemeDecorator>
      ),
   ],
};

export const SizeMOrange: Story = {
   args: {
      title: 'Some title',
      text: 'Description',
      size: TextSize.M,
   },
   decorators: [
      (Story) => (
         <ThemeDecorator theme={Theme.ORANGE}>
            <Story />
         </ThemeDecorator>
      ),
   ],
};

///
export const SizeS: Story = {
   args: {
      title: 'Some title',
      text: 'Description',
      size: TextSize.S,
   },
};

export const SizeSDark: Story = {
   args: {
      title: 'Some title',
      text: 'Description',
      size: TextSize.S,
   },
   decorators: [
      (Story) => (
         <ThemeDecorator theme={Theme.DARK}>
            <Story />
         </ThemeDecorator>
      ),
   ],
};

export const SizeSOrange: Story = {
   args: {
      title: 'Some title',
      text: 'Description',
      size: TextSize.S,
   },
   decorators: [
      (Story) => (
         <ThemeDecorator theme={Theme.ORANGE}>
            <Story />
         </ThemeDecorator>
      ),
   ],
};
