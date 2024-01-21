import { Action, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { CounterSchema } from 'Entities/Counter';
import { UserSchema } from 'Entities/User';
import { LoginSchema } from 'features/AuthByUsername';

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;
  loginForm?: LoginSchema
}

export type StateSchemaKey = keyof StateSchema

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (
    state: StateSchema,
    action: Action,
  ) => StateSchema;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager
}