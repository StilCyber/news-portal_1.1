import { articleDetailsReducer } from 'Entities/Article/model/slice/articleDetailsSlice';
import { profileReducer } from 'Entities/Profile';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import 'app/styles/index.scss';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { articleDetailsCommentsReducer } from 'pages/ArticleDetailsPage/model/slices/articleDetailsCommentsSlice';
import { articlesPageReducer } from 'pages/ArticlesPage/model/slice/articlesPageSlice';
import { ReactNode } from 'react';
import { ReducersList } from 'shared/lib/components/DinamicModuleLoader/DinamicModuleLoader';

interface StoreDecoratorProps {
   state?: DeepPartial<StateSchema>;
   asyncReducers?: any;
   children: ReactNode;
}

const defaultAsyncReducers: ReducersList = {
   loginForm: loginReducer,
   profile: profileReducer,
   articleDetails: articleDetailsReducer,
   articleDetailsComments: articleDetailsCommentsReducer,
   articlesPage: articlesPageReducer,
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
