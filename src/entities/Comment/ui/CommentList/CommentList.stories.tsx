import type { Meta, StoryObj } from '@storybook/react';
import ThemeDecorator from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { CommentList } from './CommentList';

const meta: Meta<typeof CommentList> = {
   title: 'entities/CommentList',
   component: CommentList,
   parameters: {},
   tags: ['autodocs'],
   argTypes: {},
};

export default meta;

type Story = StoryObj<typeof CommentList>;

const comments = [
   {
      id: '1',
      text: 'hello world',
      user: { id: '1', username: 'Stil' },
   },
   {
    id: '2',
    text: 'It is beautiful!',
    user: { id: '2', username: 'User' },
 },
];

export const Primary: Story = {
   args: {
      comments,
   },
};

export const PrimaryDark: Story = {
   args: { comments },
   decorators: [
      (Story) => (
         <ThemeDecorator theme={Theme.DARK}>
            <Story />
         </ThemeDecorator>
      ),
   ],
};

export const PrimaryOrange: Story = {
   args: { comments },
   decorators: [
      (Story) => (
         <ThemeDecorator theme={Theme.ORANGE}>
            <Story />
         </ThemeDecorator>
      ),
   ],
};
