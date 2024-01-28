import type { Meta, StoryObj } from '@storybook/react';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import avatar from 'shared/assets/test/storybook.jpg';
import { ProfileCard } from './ProfileCard';

const meta: Meta<typeof ProfileCard> = {
   title: 'entities/ProfileCard',
   component: ProfileCard,
   parameters: {},
   tags: ['autodocs'],
   argTypes: {},
};

export default meta;

type Story = StoryObj<typeof ProfileCard>;

export const Primary: Story = {
   args: {
      data: {
         username: 'admin',
         age: 22,
         lastname: 'chan',
         first: 'Stil',
         city: 'afd',
         avatar,
      },
   },
};

export const PrimaryDark: Story = {
   args: {
      data: {
         username: 'admin',
         age: 22,
         lastname: 'chan',
         first: 'Stil',
         city: 'afd',
         avatar,
      },
   },
   decorators: [
      (Story) => (
         <ThemeDecorator theme={Theme.DARK}>
            <Story />
         </ThemeDecorator>
      ),
   ],
};

export const PrimaryWithError: Story = {
   args: {
      error: 'true',
   },
};

export const PrimaryWithErrorDark: Story = {
   args: {
      error: 'true',
   },
   decorators: [
      (Story) => (
         <ThemeDecorator theme={Theme.DARK}>
            <Story />
         </ThemeDecorator>
      ),
   ],
};

export const PrimaryIsLoading: Story = {
   args: {
      isLoading: true,
   },
};

export const PrimaryIsLoadingDark: Story = {
   args: {
      isLoading: true,
   },
   decorators: [
      (Story) => (
         <ThemeDecorator theme={Theme.DARK}>
            <Story />
         </ThemeDecorator>
      ),
   ],
};
