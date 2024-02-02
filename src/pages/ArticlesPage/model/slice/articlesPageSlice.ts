import {
   PayloadAction,
   createEntityAdapter,
   createSlice,
} from '@reduxjs/toolkit';
import { Article, ArticleView } from 'Entities/Article';
import { StateSchema } from 'app/providers/StoreProvider';
import { ArticlesPageSchema } from '../types/articlesPageSchema';
import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList';

const articlesPageAdapter = createEntityAdapter({});

const initialState = articlesPageAdapter.getInitialState<ArticlesPageSchema>({
   isLoading: false,
   error: undefined,
   view: ArticleView.SMALL,
   ids: [],
   entities: {},
});

const articlesPageSlice = createSlice({
   name: 'articlesPage',
   initialState,
   reducers: {
      setView: (state, action: PayloadAction<ArticleView>) => {
         state.view = action.payload;
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(fetchArticlesList.pending, (state) => {
            state.isLoading = true;
            state.error = undefined;
         })
         .addCase(
            fetchArticlesList.fulfilled,
            (state, action: PayloadAction<Article[]>) => {
               state.isLoading = false;
               articlesPageAdapter.upsertMany(state, action.payload);
            },
         )
         .addCase(fetchArticlesList.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
         });
   },
});

export const getArticles = articlesPageAdapter.getSelectors<StateSchema>(
   (state: StateSchema) =>
      state.articlesPage || articlesPageAdapter.getInitialState(),
);

export const { actions: articlesPageActions } = articlesPageSlice;
export const { reducer: articlesPageReducer } = articlesPageSlice;
