import type { Meta, StoryObj } from '@storybook/react';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Avatar } from './Avatar';
import AvatarImg from './storybook.jpg';

const meta: Meta<typeof Avatar> = {
   title: 'shared/Avatar',
   component: Avatar,
   parameters: {},
   tags: ['autodocs'],
   argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Primary: Story = {
   args: {
    src: AvatarImg,
    size: 150,
   },
};

export const PrimaryDark: Story = {
   args: {
      src: AvatarImg,
      size: 150,
   },
   decorators: [
      (Story) => (
         <ThemeDecorator theme={Theme.DARK}>
            <Story />
         </ThemeDecorator>
      ),
   ],
};

export const PrimarySmall: Story = {
    args: {
     src: AvatarImg,
     size: 50,
    },
 };
 
 export const PrimarySmallDark: Story = {
    args: {
       src: AvatarImg,
       size: 50,
    },
    decorators: [
       (Story) => (
          <ThemeDecorator theme={Theme.DARK}>
             <Story />
          </ThemeDecorator>
       ),
    ],
 };
