import { Article } from 'Entities/Article';

type Id = number | string;

export interface ArticleDetailsRecommendationsSchema {
   isLoading?: boolean;
   error?: string;
   ids: Id[];
   entities: Record<Id, Article>;
}
