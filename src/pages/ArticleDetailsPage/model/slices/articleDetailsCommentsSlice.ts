import {
   PayloadAction,
   createEntityAdapter,
   createSlice,
} from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Comment } from 'Entities/Comment';
import { ArticleDetailsCommentsSchema } from '../types/ArticleDetailsCommentsSchema';
import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId';

const articleDetailsCommentsAdapter = createEntityAdapter({});

const initialState =
   articleDetailsCommentsAdapter.getInitialState<ArticleDetailsCommentsSchema>({
      isLoading: false,
      error: undefined,
      ids: [],
      entities: {},
   });

const articleDetailsCommentsSlice = createSlice({
   name: 'articleDetailsComments',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(fetchCommentsByArticleId.pending, (state) => {
            state.isLoading = true;
            state.error = undefined;
         })
         .addCase(
            fetchCommentsByArticleId.fulfilled,
            (state, action: PayloadAction<Comment[]>) => {
               state.isLoading = false;
               articleDetailsCommentsAdapter.upsertMany(state, action.payload);
            },
         )
         .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
         });
   },
});

export const { selectAll, selectEntities } =
   articleDetailsCommentsAdapter.getSelectors<StateSchema>(
      (state: StateSchema) =>
         state.articleDetailsPage?.comments || initialState,
   );

export const { actions: articleDetailsCommentsActions } =
   articleDetailsCommentsSlice;
export const { reducer: articleDetailsCommentsReducer } =
   articleDetailsCommentsSlice;
