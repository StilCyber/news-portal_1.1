import { combineReducers } from '@reduxjs/toolkit';
import { ArticleDetailsPageSchema } from '../types';
import { articleDetailsPageRecommendationsReducer } from './articleDetailsPageRecommendationsSlice';
import { articleDetailsCommentsReducer } from './articleDetailsCommentsSlice';
import { ArticleDetailsCommentsSchema } from '../types/ArticleDetailsCommentsSchema';
import { ArticleDetailsRecommendationsSchema } from '../types/ArticleDetailsRecommendationsSchema';

export const articleDetailsPageReducer =
   combineReducers<ArticleDetailsPageSchema>({
      recommendations:
         articleDetailsPageRecommendationsReducer as unknown as ArticleDetailsRecommendationsSchema,
      comments:
         articleDetailsCommentsReducer as unknown as ArticleDetailsCommentsSchema,
   });
