import { memo, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
   DynamicModuleLoader,
   ReducersList,
} from '@/shared/lib/components/DinamicModuleLoader/DinamicModuleLoader';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Page } from '@/widgets/Page';
import cls from './ArticlesPage.module.scss';
import {
   articlesPageReducer,
} from '../../model/slice/articlesPageSlice';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters';
import { ArticleInfiniteList } from '../ArticleInfiniteList/ArticleInfiniteList';

interface ArticlesPageProps {
   className?: string;
}

const reducers: ReducersList = {
   articlesPage: articlesPageReducer,
};

const ArticlesPage = (props: ArticlesPageProps) => {
   const { className } = props;
   const dispatch = useAppDispatch();
   const [searchParams] = useSearchParams();

   const onLoadNextPart = useCallback(() => {
      dispatch(fetchNextArticlesPage());
   }, [dispatch]);

   useInitialEffect(() => {
      dispatch(initArticlesPage(searchParams));
   });

   return (
      <DynamicModuleLoader removeAfterUnmount reducers={reducers}>
         <Page
            className={classNames(cls.ArticlesPage, {}, [className])}
            onScrollEnd={onLoadNextPart}
         >
            <ArticlesPageFilters />
            <ArticleInfiniteList className={cls.list} />
         </Page>
      </DynamicModuleLoader>
   );
};

export default memo(ArticlesPage);
