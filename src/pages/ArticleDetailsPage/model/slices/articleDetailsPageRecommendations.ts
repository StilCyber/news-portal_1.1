import {
   PayloadAction,
   createEntityAdapter,
   createSlice,
} from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Article } from 'Entities/Article';
import { ArticleDetailsRecommendationsSchema } from '../types/ArticleDetailsRecommendationsSchema';
import { fetchArticleRecommendations } from '../services/fetchArticleRecommendations/fetchArticleRecommendations';

const articleDetailsPageRecommendationsAdapter = createEntityAdapter({});

const initialState =
   articleDetailsPageRecommendationsAdapter.getInitialState<ArticleDetailsRecommendationsSchema>(
      {
         isLoading: false,
         error: undefined,
         ids: [],
         entities: {},
      },
   );

export const articleDetailsPageRecommendationsSlice = createSlice({
   name: 'ArticleDetailsPageRecommendations',
   initialState,
   reducers: {
      exampleReducer: (state, action) => {},
   },
   extraReducers: (builder) => {
      builder
         .addCase(fetchArticleRecommendations.pending, (state) => {
            state.isLoading = true;
            state.error = undefined;
         })
         .addCase(
            fetchArticleRecommendations.fulfilled,
            (state, action: PayloadAction<Article[]>) => {
               state.isLoading = false;
               articleDetailsPageRecommendationsAdapter.upsertMany(
                  state,
                  action.payload,
               );
            },
         )
         .addCase(fetchArticleRecommendations.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
         });
   },
});

export const getArticleRecommendations =
   articleDetailsPageRecommendationsAdapter.getSelectors<StateSchema>(
      (state: StateSchema) =>
         state.articleDetailsPage?.recommendations|| initialState,
   );

export const { actions: ArticleDetailsPageRecommendationsActions } =
   articleDetailsPageRecommendationsSlice;
export const { reducer: ArticleDetailsPageRecommendationsReducer } =
   articleDetailsPageRecommendationsSlice;
