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
import { NavigateOptions, To } from 'react-router-dom';

export interface StateSchema {
   user: UserSchema;
   loginForm?: LoginSchema;
   profile?: ProfileSchema;
   articleDetails?: ArticleDetailsSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
   getReducerMap: () => ReducersMapObject<StateSchema>;
   reduce: (state: StateSchema, action: Action) => StateSchema;
   add: (key: StateSchemaKey, reducer: Reducer) => void;
   remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
   reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
   api: AxiosInstance;
   navigate?: (to: To, options?: NavigateOptions) => void;
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
