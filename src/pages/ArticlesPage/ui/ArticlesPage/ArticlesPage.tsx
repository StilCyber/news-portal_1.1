import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ArticleList } from 'Entities/Article/ui/ArticleList/ArticleList';
import { Article, ArticleView, ArticleViewSelector } from 'Entities/Article';
import {
   DynamicModuleLoader,
   ReducersList,
} from 'shared/lib/components/DinamicModuleLoader/DinamicModuleLoader';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Page } from 'widgets/Page/Page';
import { useSearchParams } from 'react-router-dom';
import cls from './ArticlesPage.module.scss';
import {
   articlesPageActions,
   articlesPageReducer,
   getArticles,
} from '../../model/slice/articlesPageSlice';
import {
   getArticlesPageInited,
   getArticlesPageIsLoading,
   getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters';

interface ArticlesPageProps {
   className?: string;
}

const reducers: ReducersList = {
   articlesPage: articlesPageReducer,
};

const ArticlesPage = (props: ArticlesPageProps) => {
   const { className } = props;
   const { t } = useTranslation('article');
   const dispatch = useAppDispatch();
   const articles = useSelector(getArticles.selectAll);
   const isLoading = useSelector(getArticlesPageIsLoading);
   const view = useSelector(getArticlesPageView);
   const [searchParams] = useSearchParams()


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
            <ArticleList
               isLoading={isLoading}
               articles={articles as Article[]}
               view={view}
               className={cls.list}
               target='_blank'
            />
         </Page>
      </DynamicModuleLoader>
   );
};

export default memo(ArticlesPage);
