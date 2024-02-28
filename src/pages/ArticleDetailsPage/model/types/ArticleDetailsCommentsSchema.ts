import { Comment } from '@/entities/Comment';

type Id = number | string;

export interface ArticleDetailsCommentsSchema {
   isLoading?: boolean;
   error?: string;
   ids: Id[];
   entities: Record<Id, Comment>;
}
