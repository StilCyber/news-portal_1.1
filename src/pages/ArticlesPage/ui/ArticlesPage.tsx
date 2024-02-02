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
import cls from './ArticlesPage.module.scss';
import {
   articlesPageActions,
   articlesPageReducer,
   getArticles,
} from '../model/slice/articlesPageSlice';
import { fetchArticlesList } from '../model/services/fetchArticlesList/fetchArticlesList';
import {
   getArticlesPageIsLoading,
   getArticlesPageView,
} from '../model/selectors/articlesPageSelectors';

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

   const onChangeView = useCallback((view: ArticleView) => {
      dispatch(articlesPageActions.setView(view))
   }, [dispatch])

   useInitialEffect(() => {
      dispatch(fetchArticlesList());
      dispatch(articlesPageActions.initState())
   });

   return (
      <DynamicModuleLoader removeAfterUnmount reducers={reducers}>
         <div className={classNames(cls.ArticlesPage, {}, [className])}>
            <ArticleViewSelector view={view} onViewClick={onChangeView}/>
            <ArticleList
               isLoading={isLoading}
               articles={articles as Article[]}
               view={view}
            />
         </div>
      </DynamicModuleLoader>
   );
};

export default memo(ArticlesPage);
