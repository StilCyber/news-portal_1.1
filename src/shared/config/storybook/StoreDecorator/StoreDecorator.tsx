import { ReactNode } from 'react';
import { articleDetailsReducer } from '@/entities/Article/testing';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import '@/app/styles/index.scss';
import { loginReducer } from '@/features/AuthByUsername/testing';
import { profileReducer } from '@/features/editableProfileCard/testing';
import { ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { addCommentFormReducer } from '@/features/addCommentForm/testing';
import { articleDetailsPageReducer } from '@/pages/ArticleDetailsPage/testing';

interface StoreDecoratorProps {
   state?: DeepPartial<StateSchema>;
   asyncReducers?: any;
   children: ReactNode;
}

const defaultAsyncReducers: ReducersList = {
   loginForm: loginReducer,
   profile: profileReducer,
   addCommentForm: addCommentFormReducer,
   articleDetails: articleDetailsReducer,
   articleDetailsPage: articleDetailsPageReducer,
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
