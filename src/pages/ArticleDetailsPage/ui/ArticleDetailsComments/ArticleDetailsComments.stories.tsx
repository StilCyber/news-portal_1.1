import type { Meta, StoryObj } from '@storybook/react';
import ThemeDecorator from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { ArticleDetailsComments } from './ArticleDetailsComments';

const meta: Meta<typeof ArticleDetailsComments> = {
   title: 'shared/ArticleDetailsComments',
   component: ArticleDetailsComments,
   parameters: {},
   tags: ['autodocs'],
   argTypes: {},
};

export default meta;

type Story = StoryObj<typeof ArticleDetailsComments>;

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
