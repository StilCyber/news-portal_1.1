import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { TabItem, Tabs } from '@/shared/ui/Tabs';
import { ArticleType } from '@/entities/Article';

interface ArticleTypeTabsProps {
   className?: string;
   value: ArticleType;
   onChangeType: (type: ArticleType) => void;
}

export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
   const { className, value, onChangeType } = props;
   const { t } = useTranslation('article');

   const typeTabs = useMemo<TabItem<string>[]>(
      () => [
         {
            value: ArticleType.ALL,
            content: t('All articles'),
         },
         {
            value: ArticleType.IT,
            content: t('IT'),
         },
         {
            value: ArticleType.SCIENCE,
            content: t('Science'),
         },
         {
            value: ArticleType.ECONOMICS,
            content: t('Economics'),
         },
      ],
      [t],
   );

   return <Tabs tabs={typeTabs} value={value} onTabClick={onChangeType} />;
});
