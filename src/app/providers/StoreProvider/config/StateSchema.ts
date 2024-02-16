import {
   Action,
   Dispatch,
   EnhancedStore,
   Reducer,
   ReducersMapObject,
} from '@reduxjs/toolkit';
import { ArticleDetailsSchema } from 'Entities/Article';
import { ProfileSchema } from 'Entities/Profile';
import { UserSchema } from 'Entities/User';
import { AxiosInstance } from 'axios';
import { LoginSchema } from 'features/AuthByUsername';
import { UISchema } from 'features/UI';
import { AddCommentFormSchema } from 'features/addCommentForm';
import { ArticleDetailsPageSchema } from 'pages/ArticleDetailsPage';
import { ArticlesPageSchema } from 'pages/ArticlesPage';

export interface StateSchema {
   user: UserSchema;
   ui: UISchema;
   loginForm?: LoginSchema;
   profile?: ProfileSchema;
   articleDetails?: ArticleDetailsSchema;
   addCommentForm?: AddCommentFormSchema;
   articlesPage?: ArticlesPageSchema;
   articleDetailsPage?: ArticleDetailsPageSchema;
}

export type StateSchemaKey = keyof StateSchema;
export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>;

export interface ReducerManager {
   getReducerMap: () => ReducersMapObject<StateSchema>;
   reduce: (state: StateSchema, action: Action) => StateSchema;
   add: (key: StateSchemaKey, reducer: Reducer) => void;
   remove: (key: StateSchemaKey) => void;
   getMountedReducers: () => MountedReducers;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
   reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
   api: AxiosInstance;
}

export interface ThunkConfig<T> {
   rejectValue: T;
   extra: ThunkExtraArg;
   dispatch?: Dispatch;
   state: StateSchema;
}

// types for fix bug configureStore

declare const $CombinedState: unique symbol;

interface EmptyObject {
   readonly [$CombinedState]?: undefined;
}

export type CombinedState<S> = EmptyObject & S;
