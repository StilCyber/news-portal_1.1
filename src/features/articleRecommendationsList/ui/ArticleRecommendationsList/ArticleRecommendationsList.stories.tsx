import type { Meta, StoryObj } from '@storybook/react';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Article } from 'Entities/Article';
import StoreDecorator from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticleRecommendationsList } from './ArticleRecommendationsList';

const article: Article = {
   id: '1',
   img: '',
   createdAt: '',
   views: 123,
   user: { id: '1', username: '123' },
   blocks: [],
   type: [],
   title: '123',
   subtitle: 'asfsa',
};

const meta: Meta<typeof ArticleRecommendationsList> = {
   title: 'features/ArticleRecommendationsList',
   component: ArticleRecommendationsList,
   parameters: {
      mockData: [
         {
            url: `${__API__}/articles?_limit=3`,
            method: 'GET',
            status: 200,
            response: [
               { ...article, id: '1' },
               { ...article, id: '2' },
               { ...article, id: '3' },
            ],
         },
      ],
   },
   tags: ['autodocs'],
   argTypes: {},
};

export default meta;

type Story = StoryObj<typeof ArticleRecommendationsList>;

export const Primary: Story = {
   args: {},
   decorators: [
      (Story) => (
         <StoreDecorator>
            <Story />
         </StoreDecorator>
      ),
   ],
};

export const PrimaryDark: Story = {
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
