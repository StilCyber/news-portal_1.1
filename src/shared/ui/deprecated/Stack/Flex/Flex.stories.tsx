import type { Meta, StoryObj } from '@storybook/react';
import ThemeDecorator from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { Flex } from './Flex';

const meta: Meta<typeof Flex> = {
   title: 'shared/Flex',
   component: Flex,
   parameters: {},
   tags: ['autodocs'],
   argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Flex>;

export const Primary: Story = {
   args: {
      children: (
         <>
            <div>first</div>
            <div>first</div>
            <div>first</div>
            <div>first</div>
         </>
      ),
   },
};

export const PrimaryDark: Story = {
   args: {
      children: (
         <>
            <div>first</div>
            <div>first</div>
            <div>first</div>
            <div>first</div>
         </>
      ),
   },
   decorators: [
      (Story) => (
         <ThemeDecorator theme={Theme.DARK}>
            <Story />
         </ThemeDecorator>
      ),
   ],
};

export const PrimaryGap4: Story = {
   args: {
      gap: '4',
      children: (
         <>
            <div>first</div>
            <div>first</div>
            <div>first</div>
            <div>first</div>
         </>
      ),
   },
};

export const PrimaryGap4Dark: Story = {
   args: {
      gap: '4',
      children: (
         <>
            <div>first</div>
            <div>first</div>
            <div>first</div>
            <div>first</div>
         </>
      ),
   },
   decorators: [
      (Story) => (
         <ThemeDecorator theme={Theme.DARK}>
            <Story />
         </ThemeDecorator>
      ),
   ],
};

export const PrimaryGap8: Story = {
   args: {
      gap: '8',
      children: (
         <>
            <div>first</div>
            <div>first</div>
            <div>first</div>
            <div>first</div>
         </>
      ),
   },
};

export const PrimaryGap8Dark: Story = {
   args: {
      gap: '8',
      children: (
         <>
            <div>first</div>
            <div>first</div>
            <div>first</div>
            <div>first</div>
         </>
      ),
   },
   decorators: [
      (Story) => (
         <ThemeDecorator theme={Theme.DARK}>
            <Story />
         </ThemeDecorator>
      ),
   ],
};

export const PrimaryGap16: Story = {
   args: {
      gap: '16',
      children: (
         <>
            <div>first</div>
            <div>first</div>
            <div>first</div>
            <div>first</div>
         </>
      ),
   },
};

export const PrimaryGap16Dark: Story = {
   args: {
      gap: '16',
      children: (
         <>
            <div>first</div>
            <div>first</div>
            <div>first</div>
            <div>first</div>
         </>
      ),
   },
   decorators: [
      (Story) => (
         <ThemeDecorator theme={Theme.DARK}>
            <Story />
         </ThemeDecorator>
      ),
   ],
};
