import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import ThemeDecorator from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
   title: 'shared/Input',
   component: Input,
   parameters: {
      layout: 'centered',
   },
   tags: ['autodocs'],
   argTypes: {},
   args: {
      value: '123123',
      placeholder: 'some text',
   },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const InputPrimary: Story = {
   args: {},
};

export const InputDark: Story = {
   args: {},
   decorators: [
      (Story) => (
         <ThemeDecorator theme={Theme.DARK}>
            <Story />
         </ThemeDecorator>
      ),
   ],
};
