import { combineReducers } from '@reduxjs/toolkit';
import { ArticleDetailsPageRecommendationsReducer } from './articleDetailsPageRecommendations';
import { articleDetailsCommentsReducer } from './articleDetailsCommentsSlice';

export const articleDetailsPageReducer = combineReducers({
   recommendations: ArticleDetailsPageRecommendationsReducer,
   comments: articleDetailsCommentsReducer,
});
