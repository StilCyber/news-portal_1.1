import { ArticleSortField, ArticleType, ArticleView } from '@/entities/Article';
import { SortOrder } from '@/shared/types';

export interface ArticlesPageSchema {
   isLoading?: boolean;
   error?: string;
   view: ArticleView;
   ids: [];
   entities: {};
   _inited: boolean;

   // pagination
   page: number;
   limit: number;
   hasMore: boolean;

   // filters
   order: SortOrder;
   sort: ArticleSortField;
   search: string;
   type: ArticleType;
}
