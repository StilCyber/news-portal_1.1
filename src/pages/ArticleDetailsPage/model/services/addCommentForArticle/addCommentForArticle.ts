import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Comment } from 'Entities/comment';
import { getUserAuthData } from 'Entities/User';
import { getArticleDetailsData } from 'Entities/Article';
import { fetchCommentsByArticleId } from '../fetchCommentsByArticleId/fetchCommentsByArticleId';

export const addCommentForArticle = createAsyncThunk<
   Comment,
   string,
   ThunkConfig<string>
>('articleDetails/addCommentForArticle', async (text, thunkApi) => {
   const { extra, rejectWithValue, dispatch, getState } = thunkApi;

   const userData = getUserAuthData(getState());

   const article = getArticleDetailsData(getState());

   if (!userData || !text || !article) {
      return rejectWithValue('no data');
   }

   dispatch(fetchCommentsByArticleId(article.id));

   try {
      const response = await extra.api.post<Comment>('/comments', {
         articleId: article.id,
         userId: userData.id,
         text,
      });
      if (!response.data) {
         throw new Error();
      }
      return response.data;
   } catch (e) {
      return rejectWithValue('error');
   }
});
