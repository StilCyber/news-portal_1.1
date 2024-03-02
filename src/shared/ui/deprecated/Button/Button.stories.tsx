import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import ThemeDecorator from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { Button, ButtonSize, ButtonTheme } from './Button';

const meta: Meta<typeof Button> = {
   title: 'shared/Button',
   component: Button,
   parameters: {
      layout: 'centered',
   },

   tags: ['autodocs'],

   argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Clear: Story = {
   args: {
      children: 'Text',
      theme: ButtonTheme.CLEAR,
   },
};

export const ClearInverted: Story = {
   args: {
      children: 'Text',
      theme: ButtonTheme.CLEAR_INVERTED,
   },
};

export const ClearDark: Story = {
   args: {
      children: 'Text',
      theme: ButtonTheme.CLEAR,
   },
   decorators: [
      (Story) => (
         <ThemeDecorator theme={Theme.DARK}>
            <Story />
         </ThemeDecorator>
      ),
   ],
};

export const OutlineDark: Story = {
   args: {
      children: 'Text',
      theme: ButtonTheme.OUTLINE,
   },
   decorators: [
      (Story) => (
         <ThemeDecorator theme={Theme.DARK}>
            <Story />
         </ThemeDecorator>
      ),
   ],
};

export const Outline: Story = {
   args: {
      children: 'Text',
      theme: ButtonTheme.OUTLINE,
   },
};

export const OutlineSizeL: Story = {
   args: {
      children: 'Text',
      theme: ButtonTheme.OUTLINE,
      size: ButtonSize.L,
   },
};

export const OutlineSizeXL: Story = {
   args: {
      children: 'Text',
      theme: ButtonTheme.OUTLINE,
      size: ButtonSize.XL,
   },
};

export const BackgroundTheme: Story = {
   args: {
      children: 'Text',
      theme: ButtonTheme.BACKGROUND,
   },
};

export const BackgroundInverted: Story = {
   args: {
      children: 'Text',
      theme: ButtonTheme.BACKGROUND_INVERTED,
   },
};

export const Square: Story = {
   args: {
      children: '>',
      theme: ButtonTheme.BACKGROUND_INVERTED,
      square: true,
      size: ButtonSize.L,
   },
};

export const SquareSizeL: Story = {
   args: {
      children: '>',
      theme: ButtonTheme.BACKGROUND_INVERTED,
      square: true,
      size: ButtonSize.L,
   },
};

export const SquareSizeM: Story = {
   args: {
      children: '>',
      theme: ButtonTheme.BACKGROUND_INVERTED,
      square: true,
      size: ButtonSize.M,
   },
};

export const SquareSizeXL: Story = {
   args: {
      children: '>',
      theme: ButtonTheme.BACKGROUND,
      square: true,
      size: ButtonSize.XL,
   },
};

export const Disabled: Story = {
   args: {
      children: 'Text',
      theme: ButtonTheme.OUTLINE,
      disabled: true,
   },
};
