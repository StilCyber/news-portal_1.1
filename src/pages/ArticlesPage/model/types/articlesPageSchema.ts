import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleView } from 'Entities/Article';

export interface ArticlesPageSchema {
   isLoading?: boolean;
   error?: string;
   view: ArticleView;
   ids: [];
   entities: {};
}
