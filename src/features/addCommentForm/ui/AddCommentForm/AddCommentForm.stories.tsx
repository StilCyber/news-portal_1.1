import type { Meta, StoryObj } from '@storybook/react';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import StoreDecorator from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { action } from '@storybook/addon-actions';
import AddCommentForm from './AddCommentForm';

const meta: Meta<typeof AddCommentForm> = {
   title: 'features/AddCommentForm',
   component: AddCommentForm,
   parameters: {},
   tags: ['autodocs'],
   argTypes: {},
};

export default meta;

type Story = StoryObj<typeof AddCommentForm>;

export const Primary: Story = {
   args: {
      onSendComment: action('onSendComment'),
   },
   decorators: [
      (Story) => (
         <StoreDecorator state={{}}>
            <Story />
         </StoreDecorator>
      ),
   ],
};

export const PrimaryDark: Story = {
   args: {
      onSendComment: action('onSendComment'),
   },
   decorators: [
      (Story) => (
         <ThemeDecorator theme={Theme.DARK}>
            <StoreDecorator state={{}}>
               <Story />
            </StoreDecorator>
         </ThemeDecorator>
      ),
   ],
};

export const PrimaryOrange: Story = {
    args: {
       onSendComment: action('onSendComment'),
    },
    decorators: [
       (Story) => (
          <ThemeDecorator theme={Theme.ORANGE}>
             <StoreDecorator state={{}}>
                <Story />
             </StoreDecorator>
          </ThemeDecorator>
       ),
    ],
 };
