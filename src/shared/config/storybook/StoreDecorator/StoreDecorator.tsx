import { ReactNode } from 'react';
import { articleDetailsReducer } from '@/entities/Article/model/slice/articleDetailsSlice';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import '@/app/styles/index.scss';
import { loginReducer } from '@/features/AuthByUsername/model/slice/loginSlice';
import { profileReducer } from '@/features/editableProfileCard/model/slice/profileSlice';

import { articlesPageReducer } from '@/pages/ArticlesPage/model/slice/articlesPageSlice';
import { ReducersList } from '@/shared/lib/components/DinamicModuleLoader/DinamicModuleLoader';
import { addCommentFormReducer } from '@/features/addCommentForm/model/slice/addCommentFormSlice';

interface StoreDecoratorProps {
   state?: DeepPartial<StateSchema>;
   asyncReducers?: any;
   children: ReactNode;
}

const defaultAsyncReducers: ReducersList = {
   loginForm: loginReducer,
   profile: profileReducer,
   articleDetails: articleDetailsReducer,
   addCommentForm: addCommentFormReducer,
   articleDetailsPage: articleDetailsReducer,
};

const StoreDecorator = (props: StoreDecoratorProps) => {
   const { state, children, asyncReducers } = props;
   return (
      <StoreProvider
         initialState={state}
         asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
      >
         {children}
      </StoreProvider>
   );
};

export default StoreDecorator;
