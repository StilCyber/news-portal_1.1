import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Select, SelectOption } from '@/shared/ui/Select';
import cls from './ArticleSortSelector.module.scss';
import { ArticleSortField } from '@/entities/Article';
import { SortOrder } from '@/shared/types/sort';

interface ArticleSortSelectorProps {
   className?: string;
   sort: ArticleSortField;
   order: SortOrder;
   onChangeOrder: (newOrder: SortOrder) => void;
   onChangeSort: (newSort: ArticleSortField) => void;
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
   const { className, sort, order, onChangeSort, onChangeOrder } = props;
   const { t } = useTranslation('article');

   const orderOptions = useMemo<SelectOption<SortOrder>[]>(
      () => [
         {
            value: 'asc',
            content: t('ascending'),
         },
         {
            value: 'desc',
            content: t('descending'),
         },
      ],
      [t],
   );

   const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(
      () => [
         {
            value: ArticleSortField.CREATED,
            content: t('date of creation'),
         },
         {
            value: ArticleSortField.TITLE,
            content: t('title'),
         },
         {
            value: ArticleSortField.VIEWS,
            content: t('views'),
         },
      ],
      [t],
   );

   return (
      <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
         <Select
            options={sortFieldOptions}
            label={t('Sort options')}
            value={sort}
            onChange={onChangeSort}
         />
         <Select
            options={orderOptions}
            label={t('by')}
            value={order}
            onChange={onChangeOrder}
         />
      </div>
   );
});
