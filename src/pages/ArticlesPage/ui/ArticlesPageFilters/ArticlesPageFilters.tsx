import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
   ArticleSortField,
   ArticleView,
   ArticleType,
} from '@/entities/Article';
import { Input } from '@/shared/ui/Input';
import { Card } from '@/shared/ui/Card';
import { SortOrder } from '@/shared/types';
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce';
import cls from './ArticlesPageFilters.module.scss';
import {
   getArticlesPageOrder,
   getArticlesPageSearch,
   getArticlesPageSort,
   getArticlesPageType,
   getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';
import { articlesPageActions } from '../../model/slice/articlesPageSlice';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { ArticleViewSelector } from '@/features/ArticleViewSelector';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';

interface ArticlesPageFiltersProps {
   className?: string;
}

export const ArticlesPageFilters = memo((props: ArticlesPageFiltersProps) => {
   const { className } = props;
   const { t } = useTranslation('article');
   const dispatch = useAppDispatch();
   const sort = useSelector(getArticlesPageSort);
   const order = useSelector(getArticlesPageOrder);
   const search = useSelector(getArticlesPageSearch);
   const view = useSelector(getArticlesPageView);
   const type = useSelector(getArticlesPageType);

   const fetchData = useCallback(() => {
      dispatch(fetchArticlesList({ replace: true }));
   }, [dispatch]);

   const debouncedFetchData = useDebounce(fetchData, 500);

   const onChangeView = useCallback(
      (view: ArticleView) => {
         dispatch(articlesPageActions.setView(view));
         dispatch(articlesPageActions.setPage(1));
      },
      [dispatch],
   );

   const onChangeSort = useCallback(
      (newSort: ArticleSortField) => {
         dispatch(articlesPageActions.setSort(newSort));
         dispatch(articlesPageActions.setPage(1));
         fetchData();
      },
      [dispatch, fetchData],
   );

   const onChangeOrder = useCallback(
      (order: SortOrder) => {
         dispatch(articlesPageActions.setOrder(order));
         dispatch(articlesPageActions.setPage(1));
         fetchData();
      },
      [dispatch, fetchData],
   );

   const onChangeSearch = useCallback(
      (search: string) => {
         dispatch(articlesPageActions.setSearch(search));
         dispatch(articlesPageActions.setPage(1));
         debouncedFetchData();
      },
      [debouncedFetchData, dispatch],
   );

   const onChangeType = useCallback(
      (value: ArticleType) => {
         dispatch(articlesPageActions.setType(value));
         dispatch(articlesPageActions.setPage(1));
         fetchData();
      },
      [fetchData, dispatch],
   );

   return (
      <div className={classNames(cls.ArticlesPageFilters, {}, [className])}>
         <div className={cls.sortWrapper}>
            <ArticleSortSelector
               sort={sort}
               order={order}
               onChangeOrder={onChangeOrder}
               onChangeSort={onChangeSort}
            />
            <ArticleViewSelector view={view} onViewClick={onChangeView} />
         </div>
         <Card className={cls.search}>
            <Input
               placeholder={t('Search')}
               value={search}
               onChange={onChangeSearch}
            />
         </Card>
         <ArticleTypeTabs
            value={type}
            onChangeType={onChangeType}
            className={cls.tabs}
         />
      </div>
   );
});
