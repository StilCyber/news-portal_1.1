import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Suspense, memo, useCallback } from 'react';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { VStack } from 'shared/ui/Stack';
import { Comment, CommentList } from 'Entities/Comment';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Loader } from 'shared/ui/Loader/Loader';
import { AddCommentForm } from 'features/addCommentForm';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { selectAll } from '../../model/slices/articleDetailsCommentsSlice';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { getCommentsIsLoading } from '../../model/selectors/getComments';

interface ArticleDetailsCommentsProps {
   className?: string;
   id: string;
}

export const ArticleDetailsComments = memo(
   (props: ArticleDetailsCommentsProps) => {
      const { className, id } = props;
      const { t } = useTranslation('article');
      const comments = useSelector(selectAll);
      const commentsIsLoading = useSelector(getCommentsIsLoading);
      const dispatch = useAppDispatch();

      const onSendComment = useCallback(
         (text: string) => dispatch(addCommentForArticle(text)),
         [dispatch],
      );

      useInitialEffect(() => {
         dispatch(fetchCommentsByArticleId(id));
      });

      return (
         <VStack gap="16" className={classNames('', {}, [className])}>
            <Text size={TextSize.L} title={t('ArticleDetailsComments')} />
            <Suspense fallback={<Loader />}>
               <AddCommentForm onSendComment={onSendComment} />
            </Suspense>
            <CommentList
               isLoading={commentsIsLoading}
               comments={comments as Comment[]}
            />
         </VStack>
      );
   },
);
