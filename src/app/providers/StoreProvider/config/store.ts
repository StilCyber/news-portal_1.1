import { Reducer, ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { userReducer } from '@/entities/User';
import { $api } from '@/shared/api/api';
import { uiReducer } from '@/features/UI';
import { rtkApi } from '@/shared/api/rtkApi';
import { CombinedState, StateSchema, ThunkExtraArg } from './StateSchema';
import { createReducerManager } from './reducerManager';

export function createReduxStore(
   initialState?: StateSchema,
   asyncReducers?: ReducersMapObject<StateSchema>,
) {
   const rootReducer: ReducersMapObject<StateSchema> = {
      ...asyncReducers,
      user: userReducer,
      ui: uiReducer,
      [rtkApi.reducerPath]: rtkApi.reducer,
   };

   const reducerManager = createReducerManager(rootReducer);

   const extraArg: ThunkExtraArg = {
      api: $api,
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
         }).concat(rtkApi.middleware),
   });

   // @ts-ignore
   store.reducerManager = reducerManager;

   return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
