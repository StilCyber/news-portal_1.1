import type { Meta, StoryObj } from '@storybook/react';
import ThemeDecorator from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { AppImage } from './AppImage';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof AppImage> = {
   title: 'shared/AppImage',
   component: AppImage,
   parameters: {},
   tags: ['autodocs'],
   argTypes: {},
};

export default meta;

type Story = StoryObj<typeof AppImage>;

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

