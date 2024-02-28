import type { Meta, StoryObj } from '@storybook/react';
import ThemeDecorator from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { Rating } from './Rating';

const meta: Meta<typeof Rating> = {
   title: 'shared/Rating',
   component: Rating,
   parameters: {},
   tags: ['autodocs'],
   argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Rating>;

export const Primary: Story = {
   args: {},
};

export const PrimaryDark: Story = {
   args: {},
   decorators: [
      (Story) => (
         <ThemeDecorator theme={Theme.DARK}>
            <Story />
         </ThemeDecorator>
      ),
   ],
};
