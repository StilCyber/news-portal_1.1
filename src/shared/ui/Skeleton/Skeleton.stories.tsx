import type { Meta, StoryObj } from '@storybook/react';
import ThemeDecorator from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { Skeleton } from './Skeleton';

const meta: Meta<typeof Skeleton> = {
   title: 'shared/Skeleton',
   component: Skeleton,
   parameters: {},
   tags: ['autodocs'],
   argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Skeleton>;

export const Normal: Story = {
   args: {
      width: '100%',
      height: 200,
   },
};

export const NormalDark: Story = {
   args: {
      width: '100%',
      height: 200,
   },
   decorators: [
      (Story) => (
         <ThemeDecorator theme={Theme.DARK}>
            <Story />
         </ThemeDecorator>
      ),
   ],
};

export const NormalOrange: Story = {
   args: {
      width: '100%',
      height: 200,
   },
   decorators: [
      (Story) => (
         <ThemeDecorator theme={Theme.ORANGE}>
            <Story />
         </ThemeDecorator>
      ),
   ],
};

export const Circle: Story = {
   args: {
      border: '50%',
      width: 100,
      height: 100,
   },
};

export const CircleDark: Story = {
   args: {
      border: '50%',
      width: 100,
      height: 100,
   },
   decorators: [
      (Story) => (
         <ThemeDecorator theme={Theme.DARK}>
            <Story />
         </ThemeDecorator>
      ),
   ],
};

export const CircleOrange: Story = {
   args: {
      border: '50%',
      width: 100,
      height: 100,
   },
   decorators: [
      (Story) => (
         <ThemeDecorator theme={Theme.ORANGE}>
            <Story />
         </ThemeDecorator>
      ),
   ],
};
