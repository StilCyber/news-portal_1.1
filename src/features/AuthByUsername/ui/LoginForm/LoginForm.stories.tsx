import type { Meta, StoryObj } from '@storybook/react';
import ThemeDecorator from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import StoreDecorator from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import LoginForm from './LoginForm';

const meta: Meta<typeof LoginForm> = {
   title: 'features/LoginForm',
   component: LoginForm,
   parameters: {
      layout: 'centered',
   },
   tags: ['autodocs'],
   argTypes: {},
   args: {},
};

export default meta;

type Story = StoryObj<typeof LoginForm>;

// export const LoginFormPrimary: Story = {
//   args: {},
// };

export const LoginFormDark: Story = {
   args: {},
   decorators: [
      (Story) => (
         <ThemeDecorator theme={Theme.DARK}>
            <StoreDecorator>
               <Story />
            </StoreDecorator>
         </ThemeDecorator>
      ),
   ],
};
