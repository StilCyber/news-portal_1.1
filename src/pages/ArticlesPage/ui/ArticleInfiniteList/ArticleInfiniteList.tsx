import { memo } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Article, ArticleList } from '@/entities/Article';
import { Text } from '@/shared/ui/Text';
import {
   getArticlesPageError,
   getArticlesPageIsLoading,
   getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';
import { getArticles } from '../../model/slice/articlesPageSlice';

interface ArticleInfiniteListProps {
   className?: string;
}

export const ArticleInfiniteList = memo((props: ArticleInfiniteListProps) => {
   const { className = '' } = props;
   const articles = useSelector(getArticles.selectAll);
   const isLoading = useSelector(getArticlesPageIsLoading);
   const view = useSelector(getArticlesPageView);
   const error = useSelector(getArticlesPageError);
   const { t } = useTranslation('article');

   if (error) {
      return <Text title={t('Error for loading')} />;
   }

   return (
      <ArticleList
         isLoading={isLoading}
         articles={articles as Article[]}
         view={view}
         className={className}
         target="_blank"
      />
   );
});
