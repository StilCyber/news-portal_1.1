import type { Meta, StoryObj } from '@storybook/react';
import ThemeDecorator from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { CommentCard } from './CommentCard';

const meta: Meta<typeof CommentCard> = {
   title: 'entities/CommentCard',
   component: CommentCard,
   parameters: {},
   tags: ['autodocs'],
   argTypes: {},
};

export default meta;

type Story = StoryObj<typeof CommentCard>;

const comment = {
   id: '1',
   text: 'hello world',
   user: { id: '1', username: 'Stil' },
};

export const Primary: Story = {
   args: { comment },
};

export const PrimaryDark: Story = {
   args: { comment },
   decorators: [
      (Story) => (
         <ThemeDecorator theme={Theme.DARK}>
            <Story />
         </ThemeDecorator>
      ),
   ],
};

export const PrimaryOrange: Story = {
   args: { comment },
   decorators: [
      (Story) => (
         <ThemeDecorator theme={Theme.ORANGE}>
            <Story />
         </ThemeDecorator>
      ),
   ],
};
