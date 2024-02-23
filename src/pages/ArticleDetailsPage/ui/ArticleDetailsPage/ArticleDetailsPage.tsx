import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleDetails } from 'Entities/Article';
import { useParams } from 'react-router-dom';
import {
   DynamicModuleLoader,
   ReducersList,
} from 'shared/lib/components/DinamicModuleLoader/DinamicModuleLoader';
import { Page } from 'widgets/Page/Page';
import { VStack } from 'shared/ui/Stack';
import { ArticleRecommendationsList } from 'features/articleRecommendationsList';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import cls from './ArticleDetailsPage.module.scss';
import { articleDetailsPageReducer } from '../../model/slices';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';

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

   if (!id) {
      return <Page>{t('The article was not found')}</Page>;
   }

   return (
      <DynamicModuleLoader removeAfterUnmount reducers={reducers}>
         <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
            <VStack gap="16" max>
               <ArticleDetailsPageHeader />
               <ArticleDetails id={id} />
               <ArticleRecommendationsList />
               <ArticleDetailsComments id={id} />
            </VStack>
         </Page>
      </DynamicModuleLoader>
   );
};

export default memo(ArticleDetailsPage);
