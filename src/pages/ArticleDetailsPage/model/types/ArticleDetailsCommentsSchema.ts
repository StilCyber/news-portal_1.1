import { EntityState } from '@reduxjs/toolkit';
import { Comment } from '@/entities/Comment/model/types/comments';

type Id = number | string;

export interface ArticleDetailsCommentsSchema {
   isLoading?: boolean;
   error?: string;
   ids: Id[];
   entities: Record<Id, Comment>;
}
