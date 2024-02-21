import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { VStack } from 'shared/ui/Stack';
import { Comment } from '../../model/types/comments';
import { CommentCard } from '../CommentCard/CommentCard';

interface CommentListProps {
   className?: string;
   comments?: Comment[];
   isLoading?: boolean;
}

export const CommentList = memo((props: CommentListProps) => {
   const { className, comments, isLoading } = props;
   const { t } = useTranslation();

   if (isLoading) {
      return (
         <VStack gap='16' className={classNames('', {}, [className])}>
            <CommentCard isLoading />
            <CommentCard isLoading />
            <CommentCard isLoading />
         </VStack>
      );
   }

   return (
      <VStack gap="16" max className={classNames('', {}, [className])}>
         {comments?.length ? (
            comments.map((comment) => (
               <CommentCard key={comment.id} comment={comment} />
            ))
         ) : (
            <Text text={t('There are no comments yet')} />
         )}
      </VStack>
   );
});
