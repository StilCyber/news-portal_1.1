import { Reducer, ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { userReducer } from 'Entities/User';
import { $api } from 'shared/api/api';
import { NavigateOptions, To } from 'react-router-dom';
import {
   CombinedState,
   StateSchema,
   ThunkExtraArg,
} from './StateSchema';
import { createReducerManager } from './reducerManager';

export function createReduxStore(
   initialState?: StateSchema,
   asyncReducers?: ReducersMapObject<StateSchema>,
   navigate?: (to: To, options?: NavigateOptions) => void,
) {
   const rootReducer: ReducersMapObject<StateSchema> = {
      ...asyncReducers,
      user: userReducer,
   };

   const reducerManager = createReducerManager(rootReducer);

   const extraArg: ThunkExtraArg = {
      api: $api,
      navigate,
   };

   const store = configureStore({
      reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
      devTools: __IS_DEV__,
      preloadedState: initialState,

      middleware: (getDefaultMiddleware) =>
         getDefaultMiddleware({
            thunk: {
               extraArgument: extraArg,
            },
         }),
   });

   // @ts-ignore
   store.reducerManager = reducerManager;

   return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
