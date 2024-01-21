import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { userReducer } from 'Entities/User';
import { counterReducer } from 'Entities/Counter';
import { StateSchema } from './StateSchema';
import { createReducerManager } from './reducerManager';

export function createReduxStore(initialState?: StateSchema) {
  const rootReducer: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer,
  };

  const reducerManager = createReducerManager(rootReducer);

  const store = configureStore<StateSchema>({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });

    // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
}
