import {
   Action,
   Dispatch,
   EnhancedStore,
   Reducer,
   ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ArticleDetailsSchema } from '@/entities/Article';
import { UserSchema } from '@/entities/User';
import { LoginSchema } from '@/features/AuthByUsername';
import { UISchema } from '@/features/UI';
import { AddCommentFormSchema } from '@/features/addCommentForm';
import { ProfileSchema } from '@/features/editableProfileCard';
import { ArticleDetailsPageSchema } from '@/pages/ArticleDetailsPage';
import { ArticlesPageSchema } from '@/pages/ArticlesPage';
import { rtkApi } from '@/shared/api/rtkApi';

export interface StateSchema {
   user: UserSchema;
   ui: UISchema;
   [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;

   // async reducers
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
