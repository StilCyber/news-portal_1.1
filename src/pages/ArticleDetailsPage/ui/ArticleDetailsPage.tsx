import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useEffect } from 'react';
import { ArticleDetails } from 'Entities/Article';
import { useNavigate, useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text/Text';
import { Comment, CommentList } from 'Entities/comment';
import {
   DynamicModuleLoader,
   ReducersList,
} from 'shared/lib/components/DinamicModuleLoader/DinamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { AddCommentForm } from 'features/addCommentForm';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import cls from './ArticleDetailsPage.module.scss';
import {
   articleDetailsCommentsReducer,
   selectAll,
} from '../model/slices/articleDetailsCommentsSlice';
import { fetchCommentsByArticleId } from '../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { addCommentForArticle } from '../model/services/addCommentForArticle/addCommentForArticle';

interface ArticleDetailsPageProps {
   className?: string;
}

const reducers: ReducersList = {
   articleDetailsComments: articleDetailsCommentsReducer,
};

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
   const { className } = props;
   const { t } = useTranslation('article');
   const { id } = useParams<{ id: string }>();
   const comments = useSelector(selectAll);
   const navigate = useNavigate()
   const dispatch = useAppDispatch();

   useInitialEffect(() => {
      dispatch(fetchCommentsByArticleId(id));
   });

   const onSendComment = useCallback(
      (text: string) => {
         dispatch(addCommentForArticle(text));
      },
      [dispatch],
   );

   const onBackToList = useCallback(() => {
      navigate(RoutePath.articles)
   }, [navigate])

   if (!id) {
      return <div>{t('The article was not found')}</div>;
   }

   return (
      <DynamicModuleLoader removeAfterUnmount reducers={reducers}>
         <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
            <Button theme={ThemeButton.OUTLINE} onClick={onBackToList}>
               {t('Back to the list')}
            </Button>
            <ArticleDetails id={id} />
            <Text title={t('Comments')} className={cls.commentTitle} />
            <AddCommentForm onSendComment={onSendComment} />
            <CommentList comments={comments as Comment[]} />
         </div>
      </DynamicModuleLoader>
   );
};

export default memo(ArticleDetailsPage);
