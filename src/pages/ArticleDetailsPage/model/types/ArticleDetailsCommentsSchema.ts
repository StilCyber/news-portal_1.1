import { EntityState } from '@reduxjs/toolkit';
import { Comment } from 'Entities/comment/model/types/comments';

type Id = number | string;

export interface ArticleDetailsCommentsSchema {
   isLoading?: boolean;
   error?: string;
   ids: Id[];
   entities: Record<Id, Comment>;
}

