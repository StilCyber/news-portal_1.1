import { createSelector } from '@reduxjs/toolkit';
import { getArticleDetailsData } from 'Entities/Article';
import { getUserAuthData } from 'Entities/User';

export const getCanEditArticle = createSelector(
   getArticleDetailsData,
   getUserAuthData,
   (article, user) => {
      if (!article || !user) {
         return false;
      }
      return article.user.id === user.id;
   },
);
