import { EntityState } from '@reduxjs/toolkit';
import { Article } from '@/entities/Article';

type Id = string;

export interface ArticleDetailsCommentsSchema extends EntityState<Article, Id> {
    isLoading?: boolean;
    error?: string;
}