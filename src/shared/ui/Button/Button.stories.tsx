import React from 'react'
import type { Meta, StoryObj } from '@storybook/react';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ThemeButton } from './Button';

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
      theme: ThemeButton.CLEAR,
  },
};


export const ClearDark: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.CLEAR,
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
        theme: ThemeButton.OUTLINE,
    },
};

export const OutlineDark: Story = {
  args: {
      children: 'Text',
      theme: ThemeButton.OUTLINE,
  },
  decorators: [
    (Story) => (
        <ThemeDecorator theme={Theme.DARK}>
            <Story />
        </ThemeDecorator>
    ),
],
};

