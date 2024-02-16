import {
   Action,
   Reducer,
   ReducersMapObject,
   combineReducers,
} from '@reduxjs/toolkit';
import {
   MountedReducers,
   ReducerManager,
   StateSchema,
   StateSchemaKey,
} from './StateSchema';

export function createReducerManager(
   initialReducers: ReducersMapObject<StateSchema>,
): ReducerManager {
   const reducers = { ...initialReducers };

   let combinedReducer = combineReducers(reducers);

   let keysToRemove: Array<StateSchemaKey> = [];

   const MountedReducers: MountedReducers = {};

   return {
      getReducerMap: () => reducers,
      getMountedReducers: () => MountedReducers,

      reduce: (state: DeepPartial<StateSchema>, action: Action) => {
         if (keysToRemove.length > 0) {
            state = { ...state };
            keysToRemove.forEach((key) => {
               delete state[key];
            });

            keysToRemove = [];
         }
         // @ts-ignore
         return combinedReducer(state, action);
      },

      add: (key: StateSchemaKey, reducer: Reducer) => {
         if (!key || reducers[key]) {
            return;
         }

         reducers[key] = reducer;
         MountedReducers[key] = true;

         combinedReducer = combineReducers(reducers);
      },

      remove: (key: StateSchemaKey) => {
         if (!key || !reducers[key]) {
            return;
         }

         delete reducers[key];
         keysToRemove.push(key);
         MountedReducers[key] = false;
         combinedReducer = combineReducers(reducers);
      },
   };
}
