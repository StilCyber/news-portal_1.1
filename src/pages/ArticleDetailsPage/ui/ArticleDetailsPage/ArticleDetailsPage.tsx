import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { Article, ArticleDetails, ArticleList } from 'Entities/Article';
import { useParams } from 'react-router-dom';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { Comment, CommentList } from 'Entities/comment';
import {
   DynamicModuleLoader,
   ReducersList,
} from 'shared/lib/components/DinamicModuleLoader/DinamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { AddCommentForm } from 'features/addCommentForm';
import { Page } from 'widgets/Page/Page';
import { VStack } from 'shared/ui/Stack';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import cls from './ArticleDetailsPage.module.scss';
import { selectAll } from '../../model/slices/articleDetailsCommentsSlice';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { getArticleRecommendations } from '../../model/slices/articleDetailsPageRecommendations';
import { getRecommendationsIsLoading } from '../../model/selectors/getRecommendations';
import { fetchArticleRecommendations } 
from '../../model/services/fetchArticleRecommendations/fetchArticleRecommendations';
import { articleDetailsPageReducer } from '../../model/slices';

interface ArticleDetailsPageProps {
   className?: string;
}

const reducers: ReducersList = {
   articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
   const { className } = props;
   const { t } = useTranslation('article');
   const { id } = useParams<{ id: string }>();
   const comments = useSelector(selectAll);
   const recommendations = useSelector(getArticleRecommendations.selectAll);
   const recommendationsIsLoading = useSelector(getRecommendationsIsLoading);
   const dispatch = useAppDispatch();

   useInitialEffect(() => {
      dispatch(fetchCommentsByArticleId(id));
      dispatch(fetchArticleRecommendations());
   });

   const onSendComment = useCallback(
      (text: string) => {
         dispatch(addCommentForArticle(text));
      },
      [dispatch],
   );

   if (!id) {
      return <Page>{t('The article was not found')}</Page>;
   }

   return (
      <DynamicModuleLoader removeAfterUnmount reducers={reducers}>
         <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
            <VStack gap="16" max>
               <ArticleDetailsPageHeader />
               <ArticleDetails id={id} />
               <Text
                  size={TextSize.L}
                  className={cls.commentTitle}
                  title={t('Recommend')}
               />
               <ArticleList
                  articles={recommendations as Article[]}
                  isLoading={recommendationsIsLoading}
                  className={cls.recommendations}
                  target="_blank"
               />
               <Text title={t('Comments')} className={cls.commentTitle} />
               <AddCommentForm onSendComment={onSendComment} />
               <CommentList comments={comments as Comment[]} />
            </VStack>
         </Page>
      </DynamicModuleLoader>
   );
};

export default memo(ArticleDetailsPage);
