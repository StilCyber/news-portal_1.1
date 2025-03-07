import type { Meta, StoryObj } from '@storybook/react';
import ThemeDecorator from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { PageError } from './PageError';

const meta: Meta<typeof PageError> = {
   title: 'widgets/PageError',
   component: PageError,
   parameters: {},

   tags: ['autodocs'],

   argTypes: {},
};

export default meta;

type Story = StoryObj<typeof PageError>;

export const Light: Story = {
   args: {},
};

export const Dark: Story = {
   args: {},
   decorators: [
      (Story) => (
         <ThemeDecorator theme={Theme.DARK}>
            <Story />
         </ThemeDecorator>
      ),
   ],
};
