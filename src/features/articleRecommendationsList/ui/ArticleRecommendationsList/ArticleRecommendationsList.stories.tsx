import type { Meta, StoryObj } from '@storybook/react';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ArticleRecommendationsList } from './ArticleRecommendationsList';

const meta: Meta<typeof ArticleRecommendationsList> = {
    title: 'features/ArticleRecommendationsList',
    component: ArticleRecommendationsList,
    parameters: {},
    tags: ['autodocs'],
    argTypes: {},
};

export default meta;

type Story = StoryObj<typeof ArticleRecommendationsList>;

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
     )
  ],
};
