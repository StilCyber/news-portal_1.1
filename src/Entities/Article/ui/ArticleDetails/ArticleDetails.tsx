import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import {
   DynamicModuleLoader,
   ReducersList,
} from 'shared/lib/components/DinamicModuleLoader/DinamicModuleLoader';
import { articleDetailsReducer } from 'Entities/Article/model/slice/articleDetailsSlice';
import { memo, useCallback, useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Text, TextAlign, TextSize } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import CalendarIcon from 'shared/assets/icons/calendar-20-20.svg';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Icon } from 'shared/ui/Icon/Icon';
import { HStack, VStack } from 'shared/ui/Stack';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import cls from './ArticleDetails.module.scss';
import {
   getArticleDetailsData,
   getArticleDetailsError,
   getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails';
import { ArticleBlock, ArticleBlockType } from '../../model/types/article';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

interface ArticleDetailsProps {
   className?: string;
   id: string;
}

const reducers: ReducersList = {
   articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
   const { className, id } = props;
   const { t } = useTranslation('article');
   const dispatch = useAppDispatch();
   const article = useSelector(getArticleDetailsData);
   const isLoading = useSelector(getArticleDetailsIsLoading);
   const error = useSelector(getArticleDetailsError);

   const renderBlock = useCallback((block: ArticleBlock) => {
      switch (block.type) {
         case ArticleBlockType.CODE:
            return (
               <ArticleCodeBlockComponent
                  className={cls.block}
                  block={block}
                  key={block.id}
               />
            );
         case ArticleBlockType.IMAGE:
            return (
               <ArticleImageBlockComponent
                  className={cls.block}
                  block={block}
                  key={block.id}
               />
            );
         case ArticleBlockType.TEXT:
            return (
               <ArticleTextBlockComponent
                  className={cls.block}
                  block={block}
                  key={block.id}
               />
            );
         default:
            return null;
      }
   }, []);

   useEffect(() => {
      if (__PROJECT__ !== 'storybook') {
         dispatch(fetchArticleById(id));
      }
   }, [dispatch, id]);

   let content;

   if (isLoading) {
      content = (
         <>
            <Skeleton
               className={cls.avatar}
               width={200}
               height={200}
               border="50%"
            />
            <Skeleton className={cls.title} width={300} height={32} />
            <Skeleton className={cls.skeleton} width={600} height={24} />
            <Skeleton className={cls.skeleton} width="100%" height={200} />
            <Skeleton className={cls.skeleton} width="100%" height={200} />
         </>
      );
   } else if (error) {
      content = (
         <Text
            title={t('An error occurred while uploading the article')}
            align={TextAlign.CENTER}
         />
      );
   } else {
      content = (
         <>
            <HStack justify="center" max>
               <Avatar size={200} src={article?.img} className={cls.avatar} />
            </HStack>
            <VStack gap="4" max>
               <Text
                  title={article?.title}
                  text={article?.subtitle}
                  className={cls.title}
                  size={TextSize.L}
               />
               <HStack gap="8">
                  <Icon Svg={EyeIcon} className={cls.icon} />
                  <Text text={String(article?.views)} />
               </HStack>
               <HStack gap="8">
                  <Icon Svg={CalendarIcon} className={cls.icon} />
                  <Text text={article?.createdAt} />
               </HStack>
            </VStack>
            {article?.blocks.map(renderBlock)}
         </>
      );
   }

   return (
      <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
         <VStack gap="16" className={cls.ArticleDetails}>
            {content}
         </VStack>
      </DynamicModuleLoader>
   );
});
