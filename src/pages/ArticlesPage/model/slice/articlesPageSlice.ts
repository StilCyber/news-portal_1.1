import {
   PayloadAction,
   createEntityAdapter,
   createSlice,
} from '@reduxjs/toolkit';
import { ArticleView, ArticleType, ArticleSortField } from 'Entities/Article';
import { StateSchema } from 'app/providers/StoreProvider';
import { ARTICLE_VIEW_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

import { SortOrder } from 'shared/types';
import { ArticlesPageSchema } from '../types/articlesPageSchema';
import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList';

const articlesPageAdapter = createEntityAdapter({});

const initialState = articlesPageAdapter.getInitialState<ArticlesPageSchema>({
   isLoading: false,
   error: undefined,
   view: ArticleView.SMALL,
   page: 1,
   hasMore: true,
   _inited: false,
   ids: [],
   entities: {},
   sort: ArticleSortField.CREATED,
   search: '',
   order: 'asc',
   limit: 9,
   type: ArticleType.ALL,
});

const articlesPageSlice = createSlice({
   name: 'articlesPage',
   initialState,
   reducers: {
      setView: (state, action: PayloadAction<ArticleView>) => {
         state.view = action.payload;
         localStorage.setItem(ARTICLE_VIEW_LOCALSTORAGE_KEY, action.payload);
      },
      setPage: (state, action: PayloadAction<number>) => {},
      initState: (state) => {
         const view = localStorage.getItem(
            ARTICLE_VIEW_LOCALSTORAGE_KEY,
         ) as ArticleView;
         state.view = view;
         state.limit = view === ArticleView.BIG ? 4 : 9;
         state._inited = true;
      },
      setOrder: (state, action: PayloadAction<SortOrder>) => {
         state.order = action.payload;
      },
      setSort: (state, action: PayloadAction<ArticleSortField>) => {
         state.sort = action.payload;
      },
      setSearch: (state, action: PayloadAction<string>) => {
         state.search = action.payload;
      },
      setType: (state, action: PayloadAction<ArticleType>) => {
         state.type = action.payload;
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(fetchArticlesList.pending, (state, action) => {
            state.isLoading = true;
            state.error = undefined;

            if (action.meta.arg.replace) {
               articlesPageAdapter.removeAll(state);
            }
         })
         .addCase(fetchArticlesList.fulfilled, (state, action) => {
            state.isLoading = false;
            state.hasMore = action.payload.length >= state.limit;

            if (action.meta.arg.replace) {
               articlesPageAdapter.setAll(state, action.payload);
            } else {
               articlesPageAdapter.addMany(state, action.payload);
            }
         })
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
