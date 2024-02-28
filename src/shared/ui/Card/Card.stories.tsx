import type { Meta, StoryObj } from '@storybook/react';
import ThemeDecorator from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { Card } from './Card';
import { Text } from '../Text/Text';

const meta: Meta<typeof Card> = {
   title: 'shared/Card',
   component: Card,
   parameters: {},
   tags: ['autodocs'],
   argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Card>;

const children = <Text title="someTitle" text="someText" />;

export const Primary: Story = {
   args: {
      children,
   },
};

export const PrimaryDark: Story = {
   args: { children },
   decorators: [
      (Story) => (
         <ThemeDecorator theme={Theme.DARK}>
            <Story />
         </ThemeDecorator>
      ),
   ],
};
