import { FC, ReactNode, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { Reducer } from '@reduxjs/toolkit';
import { ReduxStoreWithManager } from '@/app/providers/StoreProvider';
// eslint-disable-next-line stil-plugin-paths/layer-imports
import {
   StateSchema,
   StateSchemaKey,
} from '@/app/providers/StoreProvider/config/StateSchema';

export type ReducersList = {
   [name in StateSchemaKey]?: Reducer<NonNullable<StateSchema[name]>>;
};

type ReducersListEntry = [StateSchemaKey, Reducer];

interface DynamicModuleLoaderProps {
   reducers: ReducersList;
   children: ReactNode;
   removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
   const { children, reducers, removeAfterUnmount } = props;

   const dispatch = useDispatch();

   const store = useStore() as ReduxStoreWithManager;

   useEffect(() => {
      const mountedReducers = store.reducerManager.getMountedReducers();
      Object.entries(reducers).forEach(([name, reducer]) => {
         store.reducerManager.add(name as StateSchemaKey, reducer);
         dispatch({ type: `@INIT ${name} reducer` });
      });

      return () => {
         if (removeAfterUnmount) {
            Object.entries(reducers).forEach(([name, reducer]) => {
               const mounted = mountedReducers[name as StateSchemaKey];
               if (!mounted) {
                  store.reducerManager.remove(name as StateSchemaKey);
                  dispatch({ type: `@DESTROY ${name} reducer` });
               }
            });
         }
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   // eslint-disable-next-line react/jsx-no-useless-fragment
   return <>{children}</>;
};
