import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ButtonSize, ThemeButton } from './Button';

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

export const Outline: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.OUTLINE,
  },
};

export const OutlineSizeL: Story = {
    args: {
      children: 'Text',
      theme: ThemeButton.OUTLINE,
      size: ButtonSize.L
    },
  };

  export const OutlineSizeXL: Story = {
    args: {
      children: 'Text',
      theme: ThemeButton.OUTLINE,
      size: ButtonSize.XL
    },
  };


export const BackgroundTheme: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.BACKGROUND,
  },
};

export const BackgroundInverted: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.BACKGROUND_INVERTED,
  },
};

export const Square: Story = {
    args: {
      children: '>',
      theme: ThemeButton.BACKGROUND_INVERTED,
      square: true,
      size: ButtonSize.L,
    },
  };
  

export const SquareSizeL: Story = {
  args: {
    children: '>',
    theme: ThemeButton.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.L,
  },
};

export const SquareSizeM: Story = {
  args: {
    children: '>',
    theme: ThemeButton.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.M,
  },
};

export const SquareSizeXL: Story = {
  args: {
    children: '>',
    theme: ThemeButton.BACKGROUND,
    square: true,
    size: ButtonSize.XL,
  },
};
