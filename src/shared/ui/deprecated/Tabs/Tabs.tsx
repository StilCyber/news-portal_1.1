import { useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import { ArticleType } from '@/entities/Article';
import cls from './Tabs.module.scss';
import { Card, CardTheme } from '../Card/Card';

export interface TabItem<T extends string> {
   value: T;
   content: React.ReactNode;
}

interface TabsProps<T extends string> {
   className?: string;
   tabs: TabItem<T>[];
   value: T;
   onTabClick: (type: ArticleType) => void;
}

/**
 * @deprecated
 */

export const Tabs = <T extends string>(props: TabsProps<T>) => {
   const { className, tabs, value, onTabClick } = props;

   const clickHandler = useCallback(
      (tab: any) => () => {
         onTabClick(tab.value);
      },
      [onTabClick],
   );

   return (
      <div className={classNames(cls.Tabs, {}, [className])}>
         {tabs.map((tab) => (
            <Card
               className={cls.tab}
               key={tab.value}
               theme={
                  tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINED
               }
               onClick={clickHandler(tab)}
            >
               {tab.content}
            </Card>
         ))}
      </div>
   );
};
