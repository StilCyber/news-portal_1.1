import type { Meta, StoryObj } from '@storybook/react';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Select } from './Select';

const meta: Meta<typeof Select> = {
   title: 'shared/Select',
   component: Select,
   parameters: {},
   tags: ['autodocs'],
   argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Primary: Story = {
   args: {
      label: 'someTextLabel',
      options: [
         { value: '123', content: 'First point' },
         { value: '456', content: 'Two point' },
      ],
   },
};

export const PrimaryDark: Story = {
   args: {
      label: 'someTextLabel',
      options: [
         { value: '123', content: 'First point' },
         { value: '456', content: 'Two point' },
      ],
   },
   decorators: [
      (Story) => (
         <ThemeDecorator theme={Theme.DARK}>
            <Story />
         </ThemeDecorator>
      ),
   ],
};
